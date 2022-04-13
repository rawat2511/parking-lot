import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

export const VehicalNumber = () => {

  const navigate = useNavigate();

  const style = {
      outline: "none",
      border: "none",
      padding: "8px 12px",
      fontSize: "20px",
      borderRadius: "8px"
  }

  const [state, setState] = useState("") 

  const handelClick = () => {
      localStorage.setItem("number", state);
      navigate("/parking-lot")
  } 

  return (
    <div>
        <input style={style} type="text" name="num" onChange={(e) => setState(e.target.value)} placeholder="UP14 AX 8080" />
        <br />
        <br />
        <br />
        <Button text="Vehical Number" onClick={() => handelClick()} color="red" />
    </div>
  )
}
