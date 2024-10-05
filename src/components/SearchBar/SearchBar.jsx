import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.searchValue.value;
    if (form.elements.searchValue.value.trim() === "") {
      toast.error("Please write input value!");
      return;
    }
    handleSearch(searchValue);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <button className={s.btn} type="submit">
          <FcSearch className={s.icon} />
        </button>
        <input
          className={s.input}
          name="searchValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
