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
          Nuestros clientes son desde profesionales hasta emprendedores, no
          importa que tan grande o pequeño sea tu negocio, ahi estamos para
          ayudarte a darle todo lo que necesite.
          <br></br>
          <br></br>
          <strong>Todo lo que es imagen nos encanta!</strong>Sabemos que aparte de un buen
          producto, necesitamos una buena presentación.
          <br></br>
          <br></br>
          Nuestro trabajo es darte la estética que necesitas para que puedas
          salir al mercado <strong>de la mejor forma.</strong>
          <br></br>
          <br></br>
          No es nada nuevo decir que <strong>todo se mueve en las redes</strong> más rapido que
          en la realidad... Pensar en redes sociales ya era importante, pero
          <strong>ahora? Adaptarnos a la nueva realidad</strong> es asumir que nuestro mundo se
          desempeña más en el ciberespacio que en cualquier otro ambito...
          <br></br>
          <br></br>
          Por eso, que mejor que una buena publicidad gráfica online? <strong>Manejamos
          las redes acorde a tus necesidades.</strong>
          <br></br>
          <br></br>
          <strong>Te ayudamos a potenciar tu negocio, tu emprendimiento o tu servicio</strong>
          para que llegue de manera efectiva a tus clientes...
          <br></br>
          <br></br>
          Para nosotros es muy importante escuchar las necesidades de nuestros
          clientes, lo que quieren o se imaginan obteniendo el mejor de los
          resultados. Va más allá del diseño que funciona, les da una identidad
          que rápidamente aman y se apropian 100 % de ella, sintiéndose
          identificados.
          <br></br>
          <br></br>
          Porque ningún diseño es merito nuestro, lo hacemos en equipo y en
          conjunto con cada cliente.
        </p>
      </div>
    </>
  );
}
