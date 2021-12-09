import React from 'react';
import { useState, useEffect } from 'react';
import './Form.css';
//import { Link } from "react-router-dom";


const FormDiscovery = () => {
  
const [ip, setIp] = useState("");
const [grilla, setGrilla] = useState([]);
  

  const handleBuscar   = (event) => {
    event.preventDefault();  
    const getData = async () => {
        try {
          console.log(ip);
          let resp = await fetch(`http://168.181.186.118:9093/util/procesaip/${ip}`);
          //let resp = await fetch(`http://localhost:8080/util/procesaip/${ip}`);
          //let resp = await fetch(`http://localhost:8080/util/procesaip`);
          resp = await resp.json();
          console.log(resp);
          console.log(ip);
          setGrilla(resp);
        } catch(error) {
          console.error(error);
        }
      };
      getData();
  } 

  return (
     <> 
    <div className='form-content-right'>
      <form className='form' onSubmit={handleBuscar}>
        <h1>
          Por favor ingreso al IP del lugar que quiera recibir información.
          (Ej :  94.80.188.102)
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Direccion IP</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter Ip'
            value={ip}
            onChange={e => setIp(e.target.value)}
          />          
        </div>
       
        <button className='form-input-btn' type='submit' >
          Descubrir IP
        </button>
       
        <span className='form-input-login'>
          Desea ver información estadistica ? Presione <a href='#'>aqui</a>
        </span>
      </form>

    </div>
          <div style={{color: "blue"}}>
          <h4>IP : {grilla.ipSearch}  -  fecha actual : {grilla.fecha}</h4>
          <p>Pais : {grilla.pais} - Iso Code : ({grilla.isoCode}) </p>
          <p>Idiomas : {grilla.idiomas}</p>
          <p>Hora : {grilla.usoHorario}</p>
          <p>Distancia con Buenos Aires : {grilla.distanciaBsAs}</p>
      </div>
    </>
  );
};

export default FormDiscovery;