import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";
import { Post } from "../post";

export function PostContainer() {
  const { issues } = useContext(IssuesContext);

  return (
    <div>
      {issues.map((issue): any => {
        return (
          <Post
            key={issue.createdAt}
            text={issue.text}
            title={issue.title}
            postLink={issue.postLink}
            createdAt={issue.createdAt}
          ></Post>
        );
      })}
    </div>
  );
}
