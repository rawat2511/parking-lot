import React from 'react'

export const Button = ({text, onClick, color}) => {

  const btnStyle = {
      outline: "none",
      border: "none",
      padding: "8px 14px",
      borderRadius: "8px",
      color: "white",
      cursor: "pointer",
      fontSize: "18px",
      backgroundColor: color
  }
  
  return (
    <button style={btnStyle} onClick={onClick} >{text}</button>
  )
}
