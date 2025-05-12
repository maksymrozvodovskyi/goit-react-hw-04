import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchData = async (image) => {
  const response = await axios.get(
    `/search/photos/?query=${image}&client_id=cZrUXKvs2_3Ih1ZnCPXpAr9jZVD-SOii34Zobyj9hPE`
  );
  return response.data.results;
};

//
