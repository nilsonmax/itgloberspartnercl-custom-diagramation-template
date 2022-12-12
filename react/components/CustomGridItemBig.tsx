import React, { ReactNode } from "react"
import styles from "./styles.css"


/**
 * Este componente sirve para pintar el elemento más grande en la arquitectura de la grilla
 * @param element children componente de vtex
 * @returns item grande de la grilla
*/

type Props = {
  element: ReactNode
}

const CustomGridItemBig = ({ element }: Props) => {
  return (
    <div className={styles.grid__itemBig}>
      {element}
    </div>
  )
}

export default CustomGridItemBig;
