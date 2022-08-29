// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./blockportfolio.module.scss";
import cx from "classnames";

export default function blockportfolio() {
  return (
    <>
      <h1 className={styles.titleportfolio}>Portfolio</h1>
      <div className={styles.containerportfolio}>
        <h3>
          Estos son <span>algunos clientes </span>que confiaron en mi...
        </h3>
        <div className={styles.clientesimages}>
          <Image
            src="/images/cliente-1.png"
            alt="Logo cliente"
            width={260}
            height={187}
          />
          <Image
            src="/images/cliente-2.png"
            alt="Logo cliente"
            width={260}
            height={187}
          />
          <Image
            src="/images/cliente-3.png"
            alt="Logo cliente"
            width={260}
            height={187}
          />
          <Image
            src="/images/cliente-4.png"
            alt="Logo cliente"
            width={260}
            height={187}
          />
          <p>Agradecemos a cada uno de nuestros clientes, por poner en nuestra manos la identidad
            de su marca y por hacernos saber que están super conformes con nuestro trabajo. Les 
            dejamos algunos mensajes que nos llenan el corazón y nos impulsan a seguir creciendo.
          </p>
        </div>
      </div>
    </>
  );
}
