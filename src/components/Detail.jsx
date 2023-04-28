import style from "../estilos/Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );

    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.detail}>
      <div className={style.info}>
        <h2 className={style.name}>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Specie: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>

      <img className={style.imgCharacter} src={character.image} alt="img" />
    </div>
  );
}

export default Detail;
