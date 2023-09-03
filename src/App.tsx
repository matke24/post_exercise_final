import { Route, Routes } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import PostView from "./components/PostView";
import Unknown from "./components/Unknown";
import SearchBar from "./components/SearchBar";
import SearchView from "./components/SearchView";

function App() {
  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
    </div>
  );
}

export default App;
