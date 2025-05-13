import css from "./App.module.css";
import axios from "axios";

import { use, useEffect, useState } from "react";
import { fetchData } from "../../unsplash-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (newImage) => {
    setInput(newImage);
    setCurrentPage(1);
    setImages([]);
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (input === "") {
      return;
    }

    async function fetchImages() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchData(input, currentPage);
        setTotalPages(data.total_pages);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [currentPage, input]);

  const isLastPage = currentPage === totalPages - 1;

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery data={images} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && !isLastPage && (
        <LoadMoreBtn onClick={incrementPage} />
      )}
    </div>
  );
}
