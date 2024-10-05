import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.galleryCard}
          onClick={() => openModal(image)}
          id={image.id}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
