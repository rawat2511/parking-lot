import React, {useState, useEffect } from 'react'
import { v4 } from 'uuid';

export const Vehical = ({vehical}) => {

    const {id, type, total, filled} = vehical;
    const [vehicalType, setVehicalType] = useState("");

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

    useEffect(() => {
        const v = localStorage.getItem("vehical");
        setVehicalType(v);
    }, [])

    const handelBooked = () => {
        if(type !== vehicalType){
            alert(`Select the Parking for ${vehicalType}`);
        }
        else {

        }
    }

    const handelEmpty = () => {
        if(type !== vehicalType){
            alert(`Select the Parking for ${vehicalType}`);
        }
        else {

        }
    }

  return (
    <div>
        <p>{type}</p>
        <div style={{display: "flex"}}>
            {
                filled.map((fill) => fill.isFilled ? <div onClick={handelBooked} key={v4()} style={true1}>Booked</div> : <div onClick={handelEmpty} key={v4()} style={false1}>Empty</div> )
            }
        </div>
    </div>
  )
}
