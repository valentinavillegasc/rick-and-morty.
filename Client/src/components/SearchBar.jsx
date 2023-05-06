import style from "../estilos/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.searchBar}>
      <input type="search" className={style.input} onChange={handleChange} />
      <button className={style.button} onClick={() => onSearch(id)}>
        Search
      </button>
    </div>
  );
}
