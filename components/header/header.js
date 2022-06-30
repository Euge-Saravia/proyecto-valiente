// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.topline}>
        <p>DISEÑO DE COMUNICACIÓN VISUAL</p>
      </div>
      <div className={styles.logovaliente}>
        <Image src="/images/logo-06.png" alt="Logo Estudio Valiente" width={1000} height={500} />
      </div>
        <div className={styles.menu}>
         <ul>
             <li className={styles.quienessomos}>
                 <a href="#">QUIÉNES SOMOS</a>
             </li>
             <li className={styles.servicios}>
                <a href="#">SERVICIOS</a>
            </li>
            <li className={styles.portfolio}>
                <a href="#">PORTFOLIO</a>
            </li>
            <li className={styles.contacto}>
                <a href="#">CONTACTO</a>
            </li>
         </ul>
        </div>
    </>
  );
}
