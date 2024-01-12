import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaUserFriends } from "react-icons/fa";
import { Firebase } from "../../../Firebase/config";
import '../Sidebar.css';

function Driverlist() {
  const [databaselist,setdatabaselist] = useState([])
const databasecollectionref = collection(Firebase , 'driver')

  const getdatabaselist = async() =>{
    const data = await getDocs(databasecollectionref)
    const filtereddata = data.docs.map((doc)=>(
      {...doc.data(),
      id:doc.id
      }
    ))
    console.log(filtereddata);
    setdatabaselist(filtereddata);
    

  }

  useEffect(() =>{
    getdatabaselist()

  },[]

  )
  return (
    <>
      <div className="upcomingrides">
    <div className='title'>
      <FaUserFriends style={{marginRight : '10px'}} size={40}/>
      <h1>My Drivers</h1>
    </div>
      <table>
        <thead>
        <tr>
        
          <th>Driver</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Car Model</th>
          <th>Earnings</th>
          <th>Balance</th>
          <th>Debited</th>
          <th>Pay Salary</th>
        </tr>
        </thead>
{
  databaselist.map((channel)=>(
    
        
          <tr>
            
            <td>{channel.Name}</td>
            <td>{channel.email}</td>
            <td>{channel.Phone}</td>
            <td>{channel.car_model}</td>
            <td>€ {channel.Earnings}</td>
            <td>€ {channel.balance}</td>
            <td>€ {channel.debited}</td>
            <td style={{background :"green"}}><p style={{color:"white"}}><b>Pay</b></p></td>
          </tr>
       
      
  ))
}
</table>
     
      
    </div>
    </>
  )
}

export default Driverlist