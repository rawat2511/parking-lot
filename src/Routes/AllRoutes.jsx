import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ParkingLot } from '../Components/ParkingLot'
import { Parkings } from '../Components/Parkings'
import { VehicalNumber } from '../Components/VehicalNumber'
import { VehicalSelect } from '../Components/VehicalSelect'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Parkings /> } />
        <Route path='/vehical-type' element={ <VehicalSelect /> } />
        <Route path='/vehical-number' element={ <VehicalNumber /> } />
        <Route path='/parking-lot' element={ <ParkingLot /> } />
    </Routes>
  )
}
