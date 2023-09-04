import React from 'react'
import styles from "./message.module.css"

const ErrorMessage = ({children}) => {
  return (
    <div className={styles.errorMessageContainer}>
      {children}
    </div>
  )
}

export default ErrorMessage