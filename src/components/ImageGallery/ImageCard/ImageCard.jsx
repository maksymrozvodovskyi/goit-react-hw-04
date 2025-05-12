import css from "./ImageCard.module.css";

export default function ImageCard({ data }) {
  return (
    <>
      <img src={data.urls.small} alt={data.description} />
    </>
  );
}
