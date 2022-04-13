import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Parkings = () => {

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
    localStorage.setItem("parking", name);
    setNum(() => num+1);
  }

  const handelSelect = () => {
    if( localStorage.getItem("parking") ) {
      navigate("/vehical-type")
    }
    else{
      alert("Select Some Parking Lot !!!")
    }
  }

  return (
    <div>
        {
            parkings.map(({id, name}) => <p key={id} style={(localStorage.getItem("parking") === name) ? stylePara : {cursor: "pointer"}} onClick={() => handelClick(name)}>{name}</p>)
        }
        <Button onClick={handelSelect} color="red" text="Selected Lot" />
    </div>
  )
}
