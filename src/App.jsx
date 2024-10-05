import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { fetchImage } from "./services/api";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");
  const customStyles = {
    overlay: {
      backgroundColor: "rgb(7 7 7 / 80%)",
    },
    content: {
      padding: "0",
      backgroundColor: "#3d3d3d",
      border: "none",
    },
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImage(page, query);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const handleSearch = (searchValue) => {
    setImages([]);
    setQuery(searchValue);
    setPage(0);
    setTotalPages(0);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };
  const openModal = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <SearchBar handleSearch={handleSearch} />
      {isLoading && <Loader />}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        images={images}
        selectedImage={selectedImage}
        style={customStyles}
      >
        <ImageModal
          closeModal={closeModal}
          images={images}
          selectedImage={selectedImage}
        />
      </Modal>
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && totalPages !== page && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default App;
