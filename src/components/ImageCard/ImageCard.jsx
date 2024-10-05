import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <>
      <div>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={s.Card}
        />
      </div>
    </>
  );
};

export default ImageCard;
