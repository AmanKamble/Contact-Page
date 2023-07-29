import React from 'react';

import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <button style={{color:props.color, background:props.bg, width: props.width}} className={styles.primaryBtn}>
        {
             props.icon
        }
       {
        props.text
       }
    </button>
  )
}

export default Button