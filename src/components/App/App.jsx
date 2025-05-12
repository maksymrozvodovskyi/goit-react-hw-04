import css from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useState } from "react";
import axios from "axios";
import { fetchData } from "../../unsplash-api";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (newImage) => {
    try {
      if (newImage === "") {
        return;
      }
      const data = await fetchData(newImage);

      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery data={images} />}
    </div>
  );
}
