import React from 'react'
import styles from './Teclado.module.css'

const Teclado = ({ children }) => {
  return (
    <div className={styles.keyboard}>
      {children}
    </div>
  )
}

export default Teclado
