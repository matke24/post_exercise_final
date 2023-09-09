import "./App.css";
import Posts from "./components/Posts";
import PostView from "./components/PostView";
import Unknown from "./components/Unknown";
import SearchBar from "./components/SearchBar";
import SearchView from "./components/SearchView";
import { useState } from "react";
import { usePostsApi, useUserApi } from "./hooks/hooksApi";
import AllRoutes from "./components/AllRoutes";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const posts = usePostsApi();
  const users = useUserApi();

  const routerData = [
    {
      path: "/",
      element: <Posts users={users} posts={posts} />,
    },
    {
      path: "/posts",
      element: <Posts users={users} posts={posts} />,
    },
    {
      path: "/posts/:id",
      element: <PostView />,
    },
    {
      path: "/search",
      element: (
        <SearchView searchText={searchText} posts={posts} users={users} />
      ),
    },
    {
      path: "/*",
      element: <Unknown />,
    },
  ];

  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <AllRoutes routerData={routerData} />
    </div>
  );
}

export default App;
