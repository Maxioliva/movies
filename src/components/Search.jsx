import styles from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";

export function Search() {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" />
        <button className={styles.searchButton} type="submit">
          <BiSearchAlt size={20} />
        </button>
      </div>
    </form>
  );
}
