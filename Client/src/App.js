import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./vistas/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";
const URL = "http://localhost:3001/rickandmorty/login/";

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

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("No hay personajes con este ID!");
    }
  };

  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

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
