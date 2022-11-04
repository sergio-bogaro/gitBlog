import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Issue {
  text: string;
  title: string;
  postLink: string;
  createdAt: string;
}

interface postType {
  issues: Issue[];
}

interface issuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as postType);

export function IssuesProvider({ children }: issuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [postNumber, setPostNumber] = useState(1);

  async function loadIssues() {
    try {
      const { data, status } = await axios.get(
        "https://api.github.com/repos/sergio-bogaro/gitBlog/issues/" +
          postNumber,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const newIssue = {
        text: data.body,
        title: data.title,
        postLink: data.html_url,
        createdAt: data.created_at,
      };

      const newNumber = postNumber + 1;

      setIssues([...issues, newIssue]);
      setPostNumber(newNumber);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  useEffect(() => {
    loadIssues();
  }, [postNumber]);

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  );
}
