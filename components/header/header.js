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
      <h1 className={styles.header}>This is a Header</h1>
      <p>lorem impsum</p>
      <div className={styles.logovaliente}>
        <Image src="/images/Logo Fluir.png" alt="Logo Fluir" width={500} height={500} />
      </div>
    </>
  );
}
