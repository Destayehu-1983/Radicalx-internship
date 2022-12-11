import React, {useState} from 'react'
import "./Navbar.css"
import { BsColumnsGap } from 'react-icons/bs';
// import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import Radicalx from "../images/RadicalX.png";

import { BiBookContent } from 'react-icons/bi';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import {CiSettings} from 'react-icons/ci';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';

function Navbar() {
  const[clicked, setClicked]= useState("");
  return (
    <div className='nav-wrapper'
    >
        <img className="Radical" src={Radicalx}  alt="" />
    
      <nav className='nav-icons'>
        <div className='dashboard wrapper'>
      < BsColumnsGap className='dashboard icon'  icons/>

      <h5 className='dash header'>Dashboard</h5>
      </div>
      <div className='wrapper'>
      <WorkspacePremiumOutlinedIcon className='icon' />

      <h5 className='apprenter header'>Apprenterships</h5>
      </div>
      <div className='wrapper'>
      {/* <BiBookContent className='icon'  /> */}
     {/* <h5 className='intern'>Internships</h5> */}
     <button className="intern-butn">
           <BiBookContent className="intern-icon"/><span>Internships</span>
          </button>
      </div>
      <div className='wrapper'>

      <BusinessCenterOutlinedIcon className='icon' />

      <h5 className='job header'>Jobs</h5>
      </div>
      <div className='wrapper'>

      <CiSettings className='icon'/>

      <h5 className='setting header'>Setting</h5>
      </div>

      {/* <div className='wrapper name-account'> */}
<footer className='name wrapper'>
      <div className='rectangle'>

      {/* <AccountBoxSharpIcon className='icon' /> */}
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU"/> */}
      {/* <h5 className='name'>Destayehu</h5> */}
      <div className='desta'>Destayehu</div>
      </div>
      </footer>
      </nav>
    </div>
  )
}

export default Navbar