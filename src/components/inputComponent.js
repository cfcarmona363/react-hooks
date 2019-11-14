import React from 'react'

 const InputComponent = ({ value, placeholder, onChange }) => {

  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} value={value || ''} onChange={onChange}/>
      <span className="bottom"></span>
      <span className="right"></span>
      <span className="top"></span>
      <span className="left"></span>
    </div>

  )
}

export default InputComponent
