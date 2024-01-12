import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Firebase } from "../../../Firebase/config";
import '../Sidebar.css';

function Costumer() {
  const [databaselist,setdatabaselist] = useState([])
  const databasecollectionref = collection(Firebase , 'users')
  
    const getdatabaselist = async() =>{
      const data = await getDocs(databasecollectionref)
      const filtereddata = data.docs.map((doc)=>(
        {...doc.data(),
        id:doc.id
        }
      )).filter((item) => item.role === 'user');
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
      <FaUserAlt style={{marginRight : '10px'}} size={40}/>
      <h1>Costumers</h1>
    </div>
      <table width={'100%'}>
        <thead>
        <tr>
        
          <th>Costumer</th>
          <th>Email</th>
          <th>Phone</th>
          
        </tr>
        </thead>
{
  databaselist.map((channel)=>(
    
        
          <tr>
            
            <td>{channel.Name}</td>
            <td>{channel.email}</td>
            <td>{channel.phone}</td>
            
          </tr>
       
      
  ))
}
</table>
     
      
    </div></>
  )
}

export default Costumer