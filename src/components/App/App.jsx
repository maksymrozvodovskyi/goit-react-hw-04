import css from "./App.module.css";
import axios from "axios";

import { useState } from "react";
import { fetchData } from "../../unsplash-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (newImage) => {
    try {
      if (newImage === "") {
        return;
      }
      setIsLoading(true);
      const data = await fetchData(newImage);
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {images.length > 0 && <ImageGallery data={images} />}
    </div>
  );
}
