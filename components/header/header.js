// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./Header.module.scss";
import cx from "classnames";

export default function Header() {
  return (
    <>
      <div>
        <div className={styles.topline}>
          {/* <p>DISEÑO DE COMUNICACIÓN VISUAL</p> */}
        </div>
        <div className={styles.container}>
          <div className={styles.logovaliente}>
            <Image
              src="/images/logo-06.png"
              alt="Logo Estudio Valiente"
              width={800}
              height={400}
            />
          </div>
          <div className={cx(styles.service, styles.quienessomos)}>
            <a href="#">QUIÉNES SOMOS</a>
          </div>
          <div className={cx(styles.service, styles.servicios)}>
            <a href="#">SERVICIOS</a>
          </div>
          <div className={cx(styles.service, styles.portfolio)}>
            <a href="#">PORTFOLIO</a>
          </div>
          <div className={cx(styles.service, styles.contacto)}>
            <a href="#">CONTACTO</a>
          </div>
        </div>
      </div>
    </>
  );
}
