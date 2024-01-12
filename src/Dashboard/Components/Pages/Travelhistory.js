import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaHistory } from "react-icons/fa";
import { Firebase } from "../../../Firebase/config";
import '../Sidebar.css';


function Travelhistory() {
  const [databaselist,setdatabaselist] = useState([])
const databasecollectionref = collection(Firebase , 'history')

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
      <FaHistory style={{marginRight : '10px'}} size={40}/>
      <h1>Travel History</h1>
    </div>
      <table>
        <thead>
        <tr>
        
          <th>Customer</th>
          <th>From</th>
          <th>Destination</th>
          <th>Driver</th>
          <th>Price</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
        </thead>
{
  databaselist.map((channel)=>(
    
        
          <tr>
            
            <td>{channel.Name}</td>
            <td>{channel.airport}</td>
            <td>{channel.destination}</td>
            <td>{channel.driver_name}</td>
            <td>€ {channel.offer_price}</td>
            <td>{channel['pickup date']}</td>
            <td>{channel['pickup time']}</td>
          </tr>
       
      
  ))
}
</table>
     
      
    </div>
    </>
  )
}

export default Travelhistory