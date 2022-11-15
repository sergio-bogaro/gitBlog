import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { PostContainer, TitleContainer } from "./styles";

interface postProps {
  text: string;
  title: string;
  postLink: string;
  createdAt: string;
  postID: number;
}

export function Post({ text, title, postLink, createdAt, postID }: postProps) {
  function openGit() {
    const win = window.open(postLink);
  }

  const dateCreated = Date.parse(createdAt);
  const time = formatDistance(dateCreated, new Date(), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PostContainer>
      <TitleContainer>
        <a href={"/post/" + postID}>
          <h2>{title}</h2>
        </a>
        <p>{time}</p>
      </TitleContainer>
      <p>{text}</p>
    </PostContainer>
  );
}
