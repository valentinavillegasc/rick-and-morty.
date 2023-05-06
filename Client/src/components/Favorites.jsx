import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../Redux/actions";
import { useState } from "react";
import style from "../estilos/Favorites.module.css";
import Card from "./Card";

function Favorites() {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const favorites = useSelector((state) => state.myFavorites);
  return (
    <div>
      <div className={style.selectors}>
        <select className={style.order} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={style.gender} onChange={handleFilter}>
          <option value="allCharacters"> All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.favorites}>
        {favorites.map(({ id, name, status, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
