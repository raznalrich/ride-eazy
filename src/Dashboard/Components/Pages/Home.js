import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaCar, FaChartLine, FaDollarSign, FaEye, FaUserAlt } from "react-icons/fa";
import { Firebase } from "../../../Firebase/config";
import '../Sidebar.css';

function Home() {
  const [databaselist,setdatabaselist] = useState([])
  const [adminlist,setadminlist] = useState([])
  const [userCount, setUserCount] = useState(0);


  
  
  
// eslint-disable-next-line
  useEffect(() =>{
    const databasecollectionref = collection(Firebase , 'addtravel')
const admincollectionref = collection(Firebase , 'admin')
const usersCollectionRef = collection(Firebase, 'users');
    //user count
    const getusercount = async() =>{
      try {
        const querySnapshot = await getDocs(usersCollectionRef);
        const count = querySnapshot.size;
        setUserCount(count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    }


    //admin
    const admindata = async() =>{
      const data = await getDocs(admincollectionref)
      const filtereddata = data.docs.map((doc)=>(
        {...doc.data(),
        id:doc.id
        }
      ))
      
      setadminlist(filtereddata);
      
  
    }

    //databse
    const getdatabaselist = async() =>{
      const data = await getDocs(databasecollectionref)
      const filtereddata = data.docs.map((doc)=>(
        {...doc.data(),
        id:doc.id
        }
      )).filter((item) => item.completed === 0);
      console.log(filtereddata);
      
      setdatabaselist(filtereddata);
      
  
    }
    
    getdatabaselist()
    admindata()
    getusercount()

  },[]

  )
  return (
    <>
    
    <div className='home_Container'>
  

        <div className="earningcard">
        <FaDollarSign style={{ color: 'white' }} size={60}/>
            <h3 style={{ color: 'white' }}>Earnings</h3>
      {adminlist.map((admindata,index)=>(
            <h1 style={{ color: 'white' }}>Є {admindata['Total Earnings']}</h1>
            ))}
        </div>
        <div className="earningcard">
        <FaEye style={{ color: 'white' }} size={60}/>
            <h3 style={{ color: 'white' }}>Balance</h3>
            {adminlist.map((admindata,index)=>(
            <h1 style={{ color: 'white' }}>Є {admindata.Balance}</h1>
            ))}
        </div>
        <div className="earningcard">
        <FaChartLine style={{ color: 'white' }} size={60}/>
            <h3 style={{ color: 'white' }}>My Profit</h3>
            {adminlist.map((admindata,index)=>(
            <h1 style={{ color: 'white' }}>Є {admindata['My earnings']}</h1>
            ))}
        </div>
        <div className="earningcard">
        <FaUserAlt style={{ color: 'white' }} size={60}/>
            <h3 style={{ color: 'white' }}>Users</h3>
            <h1 style={{ color: 'white' }}>{userCount}</h1>
        </div>
      
     
        
 
    </div> 
    
    <div className="upcomingrides">
    <div className='title'>
      <FaCar style={{marginRight : '10px'}} size={40}/>
      <h1>Upcoming Rides</h1>
    </div>
      <table>
        <thead>
        <tr>
        
          <th>Customer</th>
          <th>From</th>
          <th>Destination</th>

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

export default Home