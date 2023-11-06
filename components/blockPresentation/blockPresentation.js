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
    <div className={styles.containerPresentacion}>
      <div className={styles.blockImg}> 
        <Image
          src="/images/fotojulia-soñadora.png"
          alt="Logo Estudio Valiente"
          width={414}
          height={486}
          layout="responsive"
        />
      </div>
      <div className={styles.textcontainer}>
      <div className={styles.tituloSoyJulia}>
        <Image
          className={styles.imagetitle}
          src="/images/soy-julia-valiente.png"
          alt="Titulo Soy Julia Valiente"
          width={250}
          height={75}
          layout="responsive"
        />
        </div>
        <p className={styles.soyjulia}>
          Desde chica, siempre me atrajo el arte en todas sus formas. Estudio
          valiente es un sueño que transporté a la realidad.
          <br></br>
          <br></br>
          Este proyecto nace 100% en pandemia. Lo cree como algo complementario
          a mi trabajo en relación de dependencia, empezó llenando mis momentos
          libres de inspiración y creatividad para sobrepasar los tiempos de
          cuarentena y aislamiento.
          <br></br>
          <br></br>
          Creo fuertemente que todo lo que hacemos con entuciasmo y corazón,
          funciona de manera orgánica y hermosa.
          <br></br>
          <br></br>
          Hoy este proyecto individual se tranformó en un equipo de trabajo
          increible que cuenta con clientes felices y agradecidos.
          <br></br>
          <br></br>
          Esto es solo el comienzo.
        </p>
      </div>
    </div>
  );
}
