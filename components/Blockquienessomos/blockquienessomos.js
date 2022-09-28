// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./blockquienessomos.module.scss";
import cx from "classnames";

export default function Blockquienessomos() {
  return (
    <>
      <h1 className={styles.titlequienessomos}>¿Quiénes somos?</h1>
      <div className={styles.contentquienessomos}>
        <p className={styles.textquienessomos}>
          <strong>Bienvenidos a nuestro mundo!</strong>
          <br></br>
          Nuestros clientes son desde profesionales hasta emprendedores, 
          no importa que tan grande o pequeño sea tu negocio.
          <br></br>
          <br></br>
          Nuestro trabajo es darte la estética que necesitas para que 
          puedas salir al mercado <strong>de la mejor forma.</strong>
          <br></br>
          <br></br>
         <strong>Manejamos las redes acorde a tus necesidades. Te ayudamos a potenciar tu negocio, tu emprendimiento o tu servicio </strong>
          para que llegue de manera efectiva a tus clientes.
          <br></br>
          <br></br>
          Para nosotros es muy importante <strong> escuchar tus necesidades,</strong> lo que querés o te imaginas 
          para obtener el mejor de los resultados.
          <br></br>
          <br></br>
          Va más allá del diseño que funciona, te damos una identidad para que la ames 
          y te sientas <strong> 100% identificado</strong> con ella. 
          <br></br>
          <br></br>
          Porque ningún diseño es merito nuestro, <strong> lo hacemos en equipo y en conjunto con ustedes.</strong>
        </p>
      </div>
    </>
  );
}
