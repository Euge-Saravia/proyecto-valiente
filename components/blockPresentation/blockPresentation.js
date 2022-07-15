// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./blockpresentation.module.scss";

export default function BlockPresentation() {
  return (
    <>
      <div className={styles.text}>
       <h1>Soy Julia Valiente<span>Diseñadora</span></h1>
       <p>Desde chica, siempre me atrajo el arte en todas sus formas.
        Diseñar, pintar, escribir, bailar, cantar...
        Estudio Valiente es un sueño que transporté a la realidad.
        <br></br>
        
       </p>
      </div>
    </>
  );
}