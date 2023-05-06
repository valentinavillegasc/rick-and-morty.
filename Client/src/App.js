import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./vistas/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";

//onChange={(characterID) => window.alert(characterID)}

function App() {
  //HOOKS
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  //EVENT HANDLER
  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // Verificar si el ID ya está en el arreglo
          const idExists = characters.some((char) => char.id === data.id);
          if (idExists) {
            window.alert("¡Este personaje ya ha sido agregado!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          /* window.alert("¡No hay personajes con este ID!");  */
        }
      })
      .catch((error) => {
        window.alert("¡No hay personajes con este ID!");
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  //RENDER
  return (
    <div className="App">
      <div>
        {location.pathname !== "/" && (
          <Nav onSearch={onSearch} setAccess={setAccess} />
        )}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
