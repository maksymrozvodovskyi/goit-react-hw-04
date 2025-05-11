import { useState } from "react";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(search);

    setSearch("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onInput={handleInput}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

// cZrUXKvs2_3Ih1ZnCPXpAr9jZVD - SOii34Zobyj9hPE;
