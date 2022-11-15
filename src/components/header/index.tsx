import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link className="Logo Title" to={"/"}>
        GitBlog
      </Link>
    </HeaderContainer>
  );
}
