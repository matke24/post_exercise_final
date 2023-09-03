const SearchBar = () => {
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
      />
    </div>
  );
};

export default SearchBar;
