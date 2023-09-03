import { useNavigate } from "react-router-dom";
import { SearchBarProps } from "../utils/props";

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const setText = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate("/search");
    setSearchText(e.target.value);
  };

  return (
    <div className="input-group w-75 p-1 mx-auto">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Search
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Search by title..."
        value={searchText}
        onChange={setText}
      />
    </div>
  );
};

export default SearchBar;
