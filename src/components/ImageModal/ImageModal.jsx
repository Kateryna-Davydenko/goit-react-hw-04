import { VscChromeClose } from "react-icons/vsc";
import s from "./ImageModal.module.css";

const ImageModal = ({ closeModal, selectedImage }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={closeModal} className={s.btnClose}>
        <VscChromeClose />
      </button>
      <img
        src={selectedImage.urls.regular}
        alt={selectedImage.alt_description}
        className={s.image}
      />
      <p className={s.text}>{selectedImage.alt_description}</p>
    </div>
  );
};
export default ImageModal;
