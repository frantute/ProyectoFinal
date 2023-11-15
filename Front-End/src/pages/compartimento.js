import React from 'react';
import { useRouter } from 'next/router';
import style from '../styles/compartimiento.module.css';
import Header from '../components/Header';

function Compartimiento() {
  const router = useRouter();

  const handleCompartimento = async (compartimento) => {
    try {
      await fetch(`http://localhost:5000/${compartimento}`, {
        method: 'POST', // Puedes ajustar el método HTTP según tus necesidades
        body: JSON.stringify({ compartimento }), // Puedes enviar datos específicos al servidor si es necesario
        headers: {
          'Content-Type': 'application/json'
        }
      });

      router.push(`/${compartimento}`); // Redirige a la ruta del compartimento después de la solicitud fetch
    } catch (error) {
      console.error(`Error al cargar ${compartimento}:`, error);
      // Manejar el error, mostrar un mensaje o tomar las acciones necesarias
    }
  };

  return (
    <form>
      <Header />
      <h1 className={style.title}>Seleccione el compartimiento</h1>
      <div className={style.container}>
        <div className={style.containerimg}>
          <div className={style.botonComp1}>
            <button className={style.calendario} onClick={() => handleCompartimento('compartimento1')}>
              <img
                src='/Image/btn1.png' // Ruta de imagen correcta
                alt="Botón 1"
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
          <div className={style.botonComp2}>
            <button className={style.calendario} onClick={() => handleCompartimento('compartimento2')}>
              <img
                src='/Image/btn2.png' // Ruta de imagen correcta
                alt="Botón 2"
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
        </div>

        <div className={style.containerimg}>
          <div className={style.botonComp3}>
            <button className={style.calendario} onClick={() => handleCompartimento('compartimento3')}>
              <img
                src='/Image/btn3.png' // Ruta de imagen correcta
                alt="Botón 3"
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
          <div className={style.botonComp4}>
            <button className={style.calendario} onClick={() => handleCompartimento('compartimento4')}>
              <img
                src='/Image/btn4.png' // Ruta de imagen correcta
                alt="Botón 4"
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}

export default Compartimiento;