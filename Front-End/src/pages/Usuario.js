import React from 'react'
import style from '../styles/usuario.module.css';
import Link from 'next/link';
import Header from '../components/Header';
function Usuario() {
  return (
    <div className={style.container}>
      <Header/>
      <div>
      <h1 className={style.title}>MI PERFIL</h1>
      <div className="container">
      <label className={style.labels}>
      MAIL/USUARIO <input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      NOMBRE DEL RESPONSABLE<input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      TELEFONO DEL RESPONSABLE<input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      CONTRASEÑA<input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      </label>
      </div>
           <div className={style.seguimiento}>
              <label className={style.cuenta}>
                ¿Olvidaste tu contraseña?
              </label>
              <Link className={style.LINK} href="/RecuperarContraseña">Recupérala</Link> {/* Corregir la ruta */}
            </div>

        <button className={style.editar} >
         Editar
        </button>
        </div>
    </div>
  )
}

export default Usuario
