// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./blockimgcierre.module.scss";
import cx from "classnames";

export default function blockimgcierre() {
  return (
    <>
      <div className={styles.imgcierre}>
        <Image
          src="/images/pagina-final-bordeaux.png"
          alt="Logo cliente"
          width={382}
          height={150}
          layout="responsive"
        />
      </div>
    </>
  );
}
