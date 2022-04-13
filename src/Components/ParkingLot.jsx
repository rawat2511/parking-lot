import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Vehical } from './Vehical';

export const ParkingLot = () => {

  const [parking, setParking] = useState([]);

  const fetchData = async () => {
    let data = await axios("http://localhost:8000/parkingLot1");
    data = data.data;
    setParking(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {
        parking.map((vehical) => <Vehical key={vehical.id} vehical={vehical} /> )
      }
    </div>
  )
}
