import { PostContainer } from "./components/postContainer";
import { IssuesProvider } from "./contexts/IssuesContext";

export function App() {
  return (
    <div>
      <IssuesProvider>
        <PostContainer></PostContainer>
      </IssuesProvider>
    </div>
  );
}
