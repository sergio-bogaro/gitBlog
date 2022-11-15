import { SetStateAction, useContext, useState } from "react";
import { Header } from "../../components/header";
import { Post } from "../../components/post";
import { Profile } from "../../components/profile";
import { IssuesContext } from "../../contexts/IssuesContext";
import { PostsContainer, SearchContainer } from "./styles";

export function Home() {
  const { issues, postNumber } = useContext(IssuesContext);

  const [message, setMessage] = useState("");

  const numberOfPosts = postNumber - 1;

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <Header></Header>
      <Profile></Profile>

      <SearchContainer>
        <div className="TitleContainer">
          <h3>Pesquisar</h3>
          <h3>{numberOfPosts} Posts</h3>
        </div>

        <input
          type="text"
          id="message"
          name="message"
          placeholder="Buscar Conteudo"
          onChange={handleChange}
          value={message}
        />
      </SearchContainer>

      <PostsContainer>
        {issues.map((issue): any => {
          if (issue.text.includes(message) || issue.title.includes(message))
            return (
              <Post
                key={issue.createdAt}
                text={issue.text}
                title={issue.title}
                postLink={issue.postLink}
                createdAt={issue.createdAt}
                postID={issue.postID}
              ></Post>
            );
        })}
      </PostsContainer>
    </div>
  );
}
