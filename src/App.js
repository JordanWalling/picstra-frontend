import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import { CreatePostPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="create-post" element={<CreatePostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
