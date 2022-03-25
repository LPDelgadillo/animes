import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import styled from "styled-components";


export const Listar = () => {
  const DivCartas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 550px;
    width: 350px;
    margin: 50px 20px 30px;
    background-color: beige;
    box-shadow: 2px 0px 26px 1px black;
  `;
  const H4Style = styled.h4`
    color: red;
  `;
  const H5Styled = styled.h5`
    color: Blue;
  `;

const DivFlex = styled.div`
  display: flex;
  max-width: 90vw;

`


  const [cartas, setCartas] = useState([]);

  const getData = () => {     //Aqui creo la peticion
    axios
      .get(url)
      .then((response) => {   //Como es una promesa, la resolvemos con el then
        setCartas(response.data);
        // console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteData = (id) => {
    axios
      .delete(url + id)
      .then((response) => {
        getData();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {  //Controla todo el ciclo de vida de react
    getData();
  }, []); //[El parametro que va aqui es un parametro de escucha, que le esta diciendo cuando ejecutar lo de arriba "getData()", cuando no hay nada en los corchetes se ejecuta una sola vez]
  console.log(cartas);


  return (
    <DivFlex>
      {cartas.map((cart) => (
        <DivCartas>
          <div key={cart.id}>
            <img
              alt={cart.nombre}
              src={cart.imagen}
              width="300px"
              height="300px"
            ></img>
          </div>
          <h2>Nombre : {cart.nombre}</h2>
          <H4Style>Recompensa {cart.recompensa}</H4Style>
          <H5Styled>Apodo: {cart.apodo}</H5Styled>
          <H5Styled>Posicion: {cart.posicion}</H5Styled>
          <button onClick={() => deleteData(cart.id)}>Eliminar</button>
        </DivCartas>
      ))}
    </DivFlex>
  );
};

