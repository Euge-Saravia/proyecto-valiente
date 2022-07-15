// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./Block.module.scss";

export default function BlockImg() {
  return (
    <>
      <div className={styles.fotojulia}>
        <Image
          src="/images/pagina-06.png"
          alt="Logo Estudio Valiente"
          width={800}
          height={1000}
        />
      </div>
      
    </>
  );
}
