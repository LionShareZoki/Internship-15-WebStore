import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchInput}`);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.brandContainer}>
        <Link to="/">
          <span className={styles.firstSpan}>This is</span>
          <span className={styles.spanStyle}> Shopifly</span>
          <img src={logo} alt="Library Logo" className={styles.logo} />
        </Link>
      </div>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Pretraži proizvode"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Traži
        </button>
      </form>
    </div>
  );
};

export default Header;
