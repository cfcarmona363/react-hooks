import React from 'react'

const getType = (type) => {
  switch (type) {
    case 'bubble':
      return 'button-bubble'
    case 'jelly':
      return 'button-jelly'
    default:
      break;
  }
}

const ButtonComponent = ({ handleClick, type, label }) => {
  return(
    <div className={getType(type)}>
      <button onClick={()=> handleClick()}>{label}</button>
    </div>
  )
}

export default ButtonComponent