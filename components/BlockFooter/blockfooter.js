// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./blockfooter.module.scss";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faInstagramSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function blockfooter() {
  return (
    <>
      <h1 className={styles.contacto}>Contactanos</h1>
      <hr></hr>
      <div className={styles.iconoscontacto}>
        <div className={styles.seguinosinstagram}>
          <FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} size="2x" />
          <a
            href="https://www.instagram.com/estudiovaliente/"
            target="_blank"
            rel="noreferrer"
          >
            <span>SEGUINOS</span> EN INSTAGRAM
          </a>
        </div>
        <div className={styles.contactowhatsapp}>
       <FontAwesomeIcon className={styles.socialIcons} icon={faWhatsapp} size="2x"/>
          <a href="https://wa.me/+5493416122792">
            <span>CONTACTANOS</span> POR WHATSAPP
          </a>
        </div>
      </div>
      <div className={styles.containerfooter}>
        <div className={styles.logovalientewhite}>
          <Image
            src="/images/logo-blanco-desktop.png"
            alt="Logo Estudio Valiente"
            width={130}
            height={48}
          />
        </div>
      </div>
    </>
  );
}
