import {
  ArrowLeft,
  ArrowSquareOut,
  CalendarBlank,
  ChatCenteredText,
  GithubLogo,
} from "phosphor-react";
import { Header } from "../../components/header";
import { PostDataContainer, PostContainter } from "./styles";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";
import { Link, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function PostPage() {
  const { issues } = useContext(IssuesContext);

  const id = useParams();
  const postID = Number(id.postId);

  const postOfPage = issues != undefined ? issues[postID - 1] : null;

  function openGit() {
    window.open(postOfPage?.postLink);
  }

  if (postOfPage != null) {
    const dateCreated = Date.parse(postOfPage.createdAt);
    const time = formatDistance(dateCreated, new Date(), {
      addSuffix: true,
      locale: ptBR,
    });

    return (
      <>
        <Header></Header>
        <PostDataContainer>
          <div className="profileDataContainer">
            <div className="nameContainer">
              <Link to={"/"}>
                <ArrowLeft size={18} /> Voltar
              </Link>
              <button onClick={openGit}>
                VER NO GITHUB
                <ArrowSquareOut size={18} />
              </button>
            </div>
            <h1>{postOfPage.title}</h1>
            <br />
            <div className="profilleInformations">
              <p>
                <GithubLogo size={16} />
                {postOfPage.postCreator}
              </p>
              <p>
                <CalendarBlank size={16} />
                {time}
              </p>
              <p>
                <ChatCenteredText size={16} />
                {postOfPage.numberOfComments} Comentários
              </p>
            </div>
          </div>
        </PostDataContainer>
        <PostContainter>
          <p> {postOfPage.text} </p>
        </PostContainter>
      </>
    );
  } else {
    return (
      <div>
        <h2>Deu Erro</h2>
      </div>
    );
  }
}
