import Service from "../Services/Service";
import { useState } from "react";

export const Formulario = (props) => {

  const [n, setNombre] = useState("");

  const parseForm = (ev) => {
    ev.preventDefault();
    // revisar datos antes de enviar
    sendData();
  };

  const sendData = () => {
    let datos = { nombre : n};
    // el envio no se hace desde la vista
    Service.postData(datos);
  }


  return (
    <>
      <form id="formulario" method="POST" onSubmit={parseForm}>
        <input type="text" id="nombre" value={n} onChange={(e)=>setNombre(e.target.value)}/>
        <input type="submit" id="boton" value="enviar" />
      </form>
    </>
  );
};
