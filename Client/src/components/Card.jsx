import style from "../estilos/Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/actions";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        image,
        onClose,
        addFavorite,
        removeFavorite,
      });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.container}>
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} className={style.photo} />
      </Link>
      <div className={style.hearthContainer}></div>
      <div className={style.info}>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        {isFav ? (
          <button className={style.hearthRed} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.hearthWhite} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
