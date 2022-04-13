import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';


export const VehicalSelect = () => {
    const stylePara = {
        padding: "8px 14px",
        border: "2px solid white",
        borderRadius: "8px",
        cursor: "pointer"
      }
    
      const [parkings, setParkings] = useState([]);
      const [num, setNum] = useState(0);
      const fetchData = async () => {
        let data = await axios.get("http://localhost:8000/parkings");
        data = data.data;
        setParkings(data);
      }
    
      const navigate = useNavigate();
    
      useEffect(() => {
          fetchData()
      }, [num]);
    
      const handelClick = (name) => {
        localStorage.setItem("vehical", name);
        setNum(() => num+1);
      }
    
      const handelSelect = () => {
        if( localStorage.getItem("vehical") ) {
          navigate("/vehical-number")
        }
        else{
          alert("Select Some Vehical !!!")
        }
      }
    
      return (
        <div>
            
            <p style={(localStorage.getItem("vehical") === "2 Wheeler") ? stylePara : {cursor: "pointer"}} onClick={() => handelClick("2 Wheeler")}>2 Wheeler</p>
            <p style={(localStorage.getItem("vehical") === "Hatchbacks") ? stylePara : {cursor: "pointer"}} onClick={() => handelClick("Hatchbacks")}>Hatchbacks</p>
            <p style={(localStorage.getItem("vehical") === "SUV") ? stylePara : {cursor: "pointer"}} onClick={() => handelClick("SUV")}>SUV</p>
            
            <Button onClick={handelSelect} color="red" text="Selected Vehical" />
        </div>
      )
}
