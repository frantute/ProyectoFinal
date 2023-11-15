import React from 'react'
import CenteredContainer from '../components/CenteredContainer';
import style from '../styles/compartimiento1.module.css';
import Image from 'next/image'
import Link from 'next/link';
import Dropdown from '../components/dropdown';
import Dropdown1 from '../components/Dropdown1';
import Header from '../components/Header';

const compartimiento1 = () => {

  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [horario, setHorario] = useState("");
  const [dias, setDias] = useState("");
  const [todoslosdias, setTodosLosDias] = useState("");
  const [fechainicio, setFechaInicio] = useState("");

  const Guardar = async (e) => {
    try {
      const response = await fetch('http://localhost:5000/compartimento1informacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, horario, dias, todoslosdias,fechainicio, }),
      });
  
      if (response.ok) {
        // La solicitud fue exitosa, puedes realizar alguna acción aquí si es necesario.
        console.log('pastilla guardada');
        history.push('/compartimento');
      } else {
        // La solicitud falló, manejar el error aquí si es necesario.
        console.error('Error al guardar pastilla');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  
     
  }
   
  return (
    <div>
      <Header></Header>
      <div  className={style.img}>
      <Image width={400} height={750} src="/Image/compartimiento1.png" alt="Imagen comp1" /> 
      </div>
      <CenteredContainer> 
      <form className="form-container">
      <div className={style.label}>
      <div className={style.contenedorflotante}>
        <label htmlFor="name">Nombre de la pastilla: </label>
        <input type="text" id="NOMBRE" name="name" onChange={(event) => setNombre(event.target.value)} />
      </div> <br/>
      <div className="form-group">
        <label htmlFor="Horario"> Horario en el que se toma: </label>
        <Dropdown />
       
      </div> <br/>
      <div className="form-group">
        <label htmlFor="cuanto"> Por cuantos dias se toma? </label>
        <input type="text" id="dias" name="dias" onChange={(event) => setDias(event.target.value)} />
        <label htmlFor="dias"> Todos los dias? </label>
         SI <input className={style.checkbox} type="checkbox" value="yes" onChange={(event) => setTodosLosDias(event.target.value)}/> 
      </div><br/>
      <div className={style.contenedorflotante}>
        <label htmlFor="fecha">Fecha de Incio </label>
        <input type="text" id="FECHA" name="fecha" onChange={(event) => setFechaInicio(event.target.value)}/>
      </div> <br/>
      </div>
      
      <button className={style.BTN} onClick={() => Guardar()}>
        <div className={style.contenidoEncima}>Guardar</div>
        </button>
        

    </form>
      </CenteredContainer>

    </div>
  )
}


export default compartimiento1
