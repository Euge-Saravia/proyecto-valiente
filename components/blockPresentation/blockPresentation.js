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
      <div className={styles.textcontainer}>
        <Image
          className={styles.imagetitle}
          src="/images/soy-julia-valiente.png"
          alt="Titulo Soy Julia Valiente"
          width={250}
          height={75}
        />
        <p className={styles.soyjulia}>
          Desde chica, siempre me atrajo el arte en todas sus formas. Diseñar,
          pintar, escribir, bailar, cantar...
          <br></br>
          Estudio Valiente es un sueño que transporté a la realidad.
          <br></br>
          <br></br>
          Cuando idee este proyecto lo vi completamente inviable, así que lo tome
          como algo complementario a mis actividades cotidianas que habian
          sido afectadas por la famosa pandemia.
          <br></br>
          <br></br>
          Creo fuertemente que lo que creamos con entuciasmo y corazón, funciona
          de manera orgánica y hermosa.Hoy este proyecto individual se tranformo
          en un equipo de trabajo increible que cuenta con clientes felices y
          agradecidos.
          <br></br>
          <br></br>
          Realmente espero que este sea solo el comienzo.
        </p>
      </div>
    </>
  );
}
