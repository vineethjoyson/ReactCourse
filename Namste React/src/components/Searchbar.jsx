import { useState } from "react";
const SearchBar = ({ resdata }) => {
  const [searchText, setsearchText] = useState("");
  console.log(JSON.stringify(resdata));
  return (
    <div className="SearchBar">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
        placeholder="eg:cafe"
      />
      <button
        className="searchButton"
        onClick={() => {
          resdata.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
        }}
      >
        seacrh
      </button>
    </div>
  );
};

export default SearchBar;
