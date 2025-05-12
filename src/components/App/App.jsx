import css from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (newImage) => {
    try {
      if (newImage === "") {
        return;
      }
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?query=${newImage}&client_id=cZrUXKvs2_3Ih1ZnCPXpAr9jZVD-SOii34Zobyj9hPE`
      );

      setImages(response.data.results);
    } catch (error) {}
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery />
    </div>
  );
}
