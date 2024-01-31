// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./blockImgyFrase.module.scss";

export default function blockImgyFrase() {
  return (
    <>
      <div className={styles.imagecontainer}>
        <Image
          src="/images/fondogris-confoto1.png"
          alt="Fondo gris con frase"
          width={8000}
          height={4500}
          layout="responsive"
        />
      </div>
    </>
  );
}
