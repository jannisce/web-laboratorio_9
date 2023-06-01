import React from 'react'
import styles from './Boton.module.css'
import PropTypes from 'prop-types'

const Button = ({ value, onClick }) => {
  return (
    <button className={`${styles.button}`} onClick={onClick}>
      {value}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button