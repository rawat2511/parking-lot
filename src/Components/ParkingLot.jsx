import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Vehical } from './Vehical';

export const ParkingLot = () => {

  const navigate = useNavigate();

  const [parking, setParking] = useState([]);

  const fetchData = async () => {
    let data = await axios("http://localhost:8000/parkingLot1");
    data = data.data;
    setParking(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handelClick = () => {
    navigate("/");
  }

  return (
    <div>
      {
        parking.map((vehical) => <Vehical key={vehical.id} vehical={vehical} /> )
      }
      <div style={{marginBottom: "30px"}}></div>
      <Button text="Exit Parking" onClick={handelClick} color="blue" />
    </div>
  )
}
