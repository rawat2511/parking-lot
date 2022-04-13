import React from 'react'
import { v4 } from 'uuid';

export const Vehical = ({vehical}) => {

    const {id, type, total, filled} = vehical;

    const true1 = {
        color: "white",
        padding: "20px",
        backgroundColor: "red",
        margin: "5px"
    }
    const false1 = {
        color: "white",
        padding: "20px",
        backgroundColor: "green",
        margin: "5px"
    }

  return (
    <div>
        <p>{type}</p>
        <div style={{display: "flex"}}>
            {
                filled.map((fill, index) => fill.isFilled ? <div key={v4()} style={true1}>Booked</div> : <div key={v4()} style={false1}>Empty</div> )
            }
        </div>
    </div>
  )
}
