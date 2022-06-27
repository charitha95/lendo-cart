import { useState } from "react";
import TextInput from "../UIKit/TextInput";
import searchIcon from "../../assets/icons/search.svg";

function Search() {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <TextInput
      icon={searchIcon}
      value={search}
      onChange={handleSearch}
      placeholder="Search products"
    />
  );
}

export default Search;
