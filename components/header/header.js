// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import cx from "classnames";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.logovaliente}>
            <Image
              src="/images/logo-negro-desktop.png"
              alt="Logo Estudio Valiente"
              width={414}
              height={150}
              layout="responsive"
            />
          </div>
          <div className={cx(styles.menuhamb, { [styles.open]: isOpen })}>
            <Image
              src="/images/menuhamb-marron.png"
              alt="Logo Estudio Valiente"
              width={86}
              height={63}
              layout="responsive"
              className={cx(styles.icon, styles.active)}
              onClick={() => setIsOpen(!isOpen)}
            />
            <Image
              src="/images/menuhamb-blanco.png"
              alt="Logo Estudio Valiente"
              width={86}
              height={63}
              layout="responsive"
              className={styles.icon}
              onClick={() => setIsOpen(!isOpen)}
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
