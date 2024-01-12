import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaUserFriends } from "react-icons/fa";
import { Firebase } from "../../../Firebase/config";
import '../Sidebar.css';

function Requesteddriver() {
  const [databaselist,setdatabaselist] = useState([])
const databasecollectionref = collection(Firebase , 'driver')

  //database list
  const getdatabaselist = async() =>{
    const data = await getDocs(databasecollectionref)
    const filtereddata = data.docs.map((doc)=>(
      {...doc.data(),
      id:doc.id
      }
    )).filter((item) => item.role === 0);
    console.log(filtereddata);
    setdatabaselist(filtereddata);
    

  }
  //accept
const handleAccept = async (id)=>{
    const driverref = doc(collection(Firebase , 'driver'),id);
    try{
      await updateDoc(driverref,{role:1});
      alert("Driver is selected !")
    }
    catch(error){
        console.error('error',error)
    }

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
      <h1>Requested Drivers</h1>
    </div>
      <table>
        <thead>
        <tr>
        
          <th>Driver</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Car Model</th>
          <th>Front License</th>
          <th>Back License</th>
          <th>Insurance</th>
          <th>Accept</th>
        </tr>
        </thead>
{
  databaselist.map((channel)=>(
    
        
          <tr>
            
            <td>{channel.Name}</td>
            <td>{channel.email}</td>
            <td>{channel.Phone}</td>
            <td>{channel.car_model}</td>
            <td style={{background :"Blue"}}><a href={channel.front_license}  target="_blank"> <p style={{color:"white"}}>Front License</p></a></td>
            <td style={{background :"Blue"}}><a href={channel.back_license}  target="_blank"><p style={{color:"white"}}>Back License</p></a></td>
            <td style={{background :"Blue"}}><a href={channel.insurance}  target="_blank"><p style={{color:"white"}}>Insurance</p></a></td>
            <td onClick={()=> handleAccept(channel.id)} style={{background :"green"}}><p style={{color:"white"}}>Accept</p></td>
          </tr>
          
          
       
      
  ))
}
</table>
     
      
    </div>
    </>
  )
}

export default Requesteddriver