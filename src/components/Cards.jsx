import Card from "./Card";
import style from "../estilos/Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.cardsContainer}>
      {characters.map(({ id, name, status, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
