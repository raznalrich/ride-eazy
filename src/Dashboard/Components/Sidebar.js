import React, { useState } from 'react'
import { FaBars, FaCar, FaHistory, FaIdCard, FaTh, FaUserAlt, FaWallet } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

function Sidebar({children}) {
  const [isOpen ,setisOpen] = useState(false)
  const toggle =() => setisOpen(!isOpen)
  const menuItems=[
    {
      path:"/",
      name:"dashboard",
      icon:<FaTh/>
    },
    {
      path:"/requested-driver",
      name:"Request",
      icon:<FaIdCard/>
    },
    {
      path:"/costumer",
      name:"Costumers",
      icon:<FaUserAlt/>
    },
    {
      path:"/travel-history",
      name:"Travel-history",
      icon:<FaHistory/>
    },
    {
      path:"/driver-list",
      name:"Drivers",
      icon:<FaCar/>
    },
    {
      path:"/payment",
      name:"Payment",
      icon:<FaWallet/>
    },
    
  ]
  return (
    <div className='container'>
      <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Admin</h1>
          <div style={{marginLeft: isOpen ? "30px" : "1px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItems.map((item , index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>
{children}
      </main>
    </div>
  )
}

export default Sidebar