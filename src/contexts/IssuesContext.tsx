import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Issue {
  text: string;
  title: string;
  postLink: string;
  createdAt: string;
  postCreator: string;
  postID: number;
  numberOfComments: number;
}

interface postType {
  issues: Issue[];
  postNumber: number;
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
        "https://api.github.com/repos/sergio-bogaro/CoffeeShop/issues/" +
          postNumber,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const newIssue: Issue = {
        text: data.body,
        title: data.title,
        postLink: data.html_url,
        createdAt: data.created_at,
        postID: data.number,
        numberOfComments: data.comments,
        postCreator: data.user.login,
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
    <IssuesContext.Provider value={{ issues, postNumber }}>
      {children}
    </IssuesContext.Provider>
  );
}
