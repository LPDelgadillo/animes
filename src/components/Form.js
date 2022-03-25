import axios from "axios";
import React, { useState } from "react";
import { fileUpload } from "../helpers/fileUpload";
import { url } from "../helpers/url";


export const Form = () => {
  const initialState = { 
    nombre: "",
    imagen: "",
    recompensa: "",
    posicion: "",
    apodo: "",    
  };
  const [personaje, setPersonaje] = useState(initialState);
  const { nombre, imagen, recompensa, posicion, apodo } =
    personaje;

  const handleChanged = ({ target }) => {
    setPersonaje({
      ...personaje,
      [target.name]: target.value,
    });
  };

  const handleFileChanged = (e) => {
    console.log(e.target);
    const file = e.target.files[0];
    fileUpload(file)
      .then((resp) => {
        personaje.imagen = resp;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = () => {
    axios
      .post(url, personaje)
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setPersonaje(initialState);
  };

  return (
    <div>
      <form id="formulario" onSubmit={handleSubmit}>
        <h2>Registro Personajes de One Piece</h2>
        <hr />
        <div>
          <label>Nombre </label>
          <input
            id="inputNombre"
            name="nombre"
            value={nombre}
            onChange={handleChanged}
          />
        </div>
        <div>
          <label>Recompensa</label>
          <input
            id="inputRecompensa"
            type="number"
            name="recompensa"
            value={recompensa}
            onChange={handleChanged}
          />
        </div>
        <div>
          <label>Posición</label>
          <input
            id="inputPosicion"
            name="posicion"
            value={posicion}
            onChange={handleChanged}
          />
        </div>
        <div>
          <label>Apodo</label>
          <input
            id="inputApodo"
            name="apodo"
            value={apodo}
            onChange={handleChanged}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            id="botonImagen"
            type="file"
            name="imagen"
            value={imagen}
            onChange={handleFileChanged}
          />
        </div>
        <div>
          <button id="btnRegistro" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
