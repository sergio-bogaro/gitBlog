import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { PostPage } from "./pages/PostPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Post/:postId" element={<PostPage />} />
    </Routes>
  );
}
