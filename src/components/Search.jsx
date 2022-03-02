import styles from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { useEffect } from "react";

export function Search() {
  const query = useQuery();

  const search = query.get("search");

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <BiSearchAlt size={20} />
        </button>
      </div>
    </form>
  );
}
