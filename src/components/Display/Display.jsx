import React from 'react'
import styles from './Display.module.css'
import PropTypes from 'prop-types'

const Display = ( { value } ) => {
  return (
    <div className={`${styles.screen}`}>
      {value}
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Display
