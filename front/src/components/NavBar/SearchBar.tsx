import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import "../../style/App.css";
import "../../style/NavBar.css";
import Search from "../../assets/search-normal.png";

interface SearchBarProps {
  setValue: Dispatch<SetStateAction<string>>;
  ariaLabel: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setValue,
  ariaLabel,
}: SearchBarProps) => {
  // Default implementation for setValue
  const defaultSetValue: React.Dispatch<React.SetStateAction<string>> = (
    value
  ) => {
    // You can customize the default behavior here if needed
    console.log("Setting value:", value);
  };

  // Use provided setValue or the default implementation
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue ? setValue(ev.target.value) : defaultSetValue(ev.target.value);
  };

  return (
    <div>
      <img className="searchImage" src={Search} alt="Search Icon" />
      <input
        type="text"
        className="search-box"
        placeholder="Search Here"
        onChange={handleChange}
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default SearchBar;
