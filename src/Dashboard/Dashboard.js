import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Costumer from './Components/Pages/Costumer';
import Driverlist from './Components/Pages/Driverlist';
import Home from './Components/Pages/Home';
import Payment from './Components/Pages/Payment';
import Requesteddriver from './Components/Pages/Requesteddriver';
import Travelhistory from './Components/Pages/Travelhistory';
import Sidebar from './Components/Sidebar';
import './Dashboard.css';

function Dashboard() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/requested-driver' element={<Requesteddriver/>}/>
      <Route path='/costumer' element={<Costumer/>}/>
      <Route path='/travel-history' element={<Travelhistory/>}/>
      <Route path='/driver-list' element={<Driverlist/>}/>
      <Route path='/payment' element={<Payment/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default Dashboard