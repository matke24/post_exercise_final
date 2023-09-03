import { useEffect, useState } from "react";
import { PostData, SearchViewProps } from "../utils/props";
import Card from "./Card";

const SearchView = ({ posts, searchText, users }: SearchViewProps) => {
  const [searchResults, setSearchResults] = useState<PostData[]>([]);

  useEffect(() => {
    if (searchText) {
      const filteredData = posts.filter((post) => {
        return post.title.includes(searchText);
      });
      setSearchResults(filteredData);
    }
  }, [searchText]);

  const htmlCards = searchResults.map((post: PostData) => {
    return (
      <li className="list-group" key={post.id}>
        <Card
          postId={post.id}
          title={post.title}
          body={post.body}
          author={users[post.userId]}
        />
      </li>
    );
  });

  return (
    <div className="w-75 mx-auto mb-3">
      <h1 className="display-3 p-3 mb-3 mx-auto text-center">Posts</h1>
      <ul className="list d-flex flex-wrap gap-3 justify-content-center">
        {htmlCards}
      </ul>
    </div>
  );
};

export default SearchView;
