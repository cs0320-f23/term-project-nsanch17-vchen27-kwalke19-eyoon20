import React from "react";
import "../../style/App.css";
import "../../style/NavBar.css";
import Search from "../../assets/search-normal.png";
import { Dispatch, SetStateAction } from "react";

// interface SearchBarProps {

//   setValue: Dispatch<SetStateAction<string>>;
//   ariaLabel: string;
// }

export function SearchBar(){
// (
//   {
// //   value,
//   setValue,
//   ariaLabel,
// }: SearchBarProps) {
  return (
    <div>
      <img class="searchImage" src={Search} />
      <input
        type="text"
        className="search-box"
        //   value={value}
        placeholder="Search Here"

        // onChange={(ev) => setValue(ev.target.value)}
        // aria-label={ariaLabel}
      ></input>
    </div>
  );
}
