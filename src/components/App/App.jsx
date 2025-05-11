import css from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSearch = (newImage) => {
    console.log(newImage);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery />
    </div>
  );
}
