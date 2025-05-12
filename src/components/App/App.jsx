import css from "./App.module.css";
import axios from "axios";

import { useState } from "react";
import { fetchData } from "../../unsplash-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (newImage) => {
    try {
      if (newImage === "") {
        return;
      }
      setIsError(false);
      setImages([]);
      setIsLoading(true);
      const data = await fetchData(newImage);
      setImages(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery data={images} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </div>
  );
}
