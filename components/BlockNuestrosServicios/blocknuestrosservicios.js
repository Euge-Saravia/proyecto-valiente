// NOTES:
// * Siempre tiene que haber un export default function - con el nombre de la funcion (componente)
//   que estamos exportando
// * No se pueden poner mas de 1 elemento al nivel inicial del return, si se necesitan mas elementos
//   al mismo nivel se puede usar <></> vacio.
// * class no se usa, se usa className

import Image from "next/image";
import styles from "./blocknuestrosservicios.module.scss";
import cx from "classnames";

export default function blocknuestrosservicios() {
  return (
    <>
      <h1 className={styles.titlenuestrosservicios}>Nuestros Servicios</h1>
      <div className={styles.imgservicios}>
        <div className={cx(styles.icons, styles.identidad)}>
          <Image
            src="/images/icono-identidad.png"
            alt="Logo Estudio Valiente"
            width={49}
            height={49}
          />
          <h3>
            Identidad de Marca/ <span> Branding</span>
          </h3>
          <Image
            src="/images/icono-planificacion.png"
            alt="Logo Estudio Valiente"
            width={49}
            height={49}
          />
          <h3>
            Planificación <span>mensual</span>
          </h3>
          <Image
            src="/images/icono-contenido.png"
            alt="Logo Estudio Valiente"
            width={49}
            height={49}
          />
          <h3>
            <span>Generación de </span>contenido
          </h3>
          <Image
            src="/images/icono-diseñografico.png"
            alt="Logo Estudio Valiente"
            width={49}
            height={49}
          />
          <h3>Diseño gráfico</h3>
          <Image
            src="/images/icono-ideas.png"
            alt="Logo Estudio Valiente"
            width={49}
            height={49}
          />
          <h3>Propuestas creativas</h3>
          <Image
            src="/images/icono-difusion.png"
            alt="Logo Estudio Valiente"
            width={49}
            height={49}
          />
          <h3>Difusión</h3>
        </div>
        <span className={styles.cierrebloque}>Y lo que necesites</span>
      </div>
    </>
  );
}
