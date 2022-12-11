import React from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import "./Header.css";
import qalified from "../images/qalified.png";
function Header() {
  return (
    <>
    <div className='header-outerwrapper'>
    <div className='header-wrapper'>
        <div className='internships'><h3 className='intern-header'>Internships</h3></div>
        <div className='create-new'><button className='create-internbtn'><AddBoxOutlinedIcon className='addbox-icon'/>Create New Internship</button></div>
      
    </div>
   
    <div className='header-btnp'>
    <div className='header-p'>
      <h3 className='internship-header'>Internship Insights</h3>
      <p className='paragraph'>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic</p>
    </div>
    <div className='btn-header paragraph'>
      <div><button className='this-week'>This Week</button></div>
      <div><button className='This-Month'>This Month</button></div>
      <div><button className='Select-dates'><DateRangeOutlinedIcon /> Select dates</button></div> 
     </div>




     <div className='header-paragraph'>
      {/* <div className='hp'>
     <h3 className='hundered-thousand'>100,000</h3>
     <p className='total-enrolment'>Total Enrollments</p>
     </div>
     <div className='hp'>

     <h3>65,000</h3>
     <p> completion</p>
     </div>
     <div className='hp'>

      <h3>850</h3>
     <p>Qualified candidates</p>
     </div>
     <div className='hp'>

     <h3>375</h3>
     <p>Reached out</p>
     </div>
     <div className='hp'>

     <h3>300</h3>
     <p>Interview set</p>
     </div>
     <div className='hp'>
     <h3>150</h3>
     <p>Candidates hired</p> 
     </div> */}
     <img className='internship-candidates' src={qalified} alt="" />


     </div>
    </div>
    </div>
    </>
  )
}

export default Header;