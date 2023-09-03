import { Route, Routes } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import PostView from "./components/PostView";
import Unknown from "./components/Unknown";
import SearchBar from "./components/SearchBar";
import SearchView from "./components/SearchView";
import { useState } from "react";
import { PostData, UserMapProps } from "./utils/props";

function App() {
  const [postsData, setPostData] = useState<PostData[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [userData, setUserData] = useState<UserMapProps>({});

  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route
          path="/"
          element={
            <Posts setPostData={setPostData} setUserData={setUserData} />
          }
        />
        <Route
          path="/posts"
          element={
            <Posts setPostData={setPostData} setUserData={setUserData} />
          }
        />
        <Route path="/posts/:id" element={<PostView />} />
        <Route
          path="/search"
          element={
            <SearchView
              searchText={searchText}
              posts={postsData}
              users={userData}
            />
          }
        />
        <Route path="*" element={<Unknown />} />
      </Routes>
    </div>
  );
}

export default App;
