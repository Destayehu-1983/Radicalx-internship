import React from 'react'
import "./Middlepage.css";
import { AiOutlineDownSquare } from "react-icons/ai"
import {MdBarChart} from "react-icons/md"
import {HiOutlineUsers} from "react-icons/hi"
import {TfiMore}from "react-icons/tfi"
import {BsBarChart } from 'react-icons/bs';
import QualifiedCandidates from "../images/Qualified Candidates.png";
import Row from "../images/Row.png"
import SpokeOutlinedIcon from '@mui/icons-material/SpokeOutlined';//three dots
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';//three dots
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Buttons from "../images/Buttons group.png";

// import Paper from '@material-ui/core/Paper';
// import paper from "@mui/icons-material/paper";

function Middlepage() {

  return (
  <>
     <div className='middlepage-wrapper'>
        <div className='internshiptitile-wrapper'>
        <div className='internship-title'>Internship Title</div>
        <div className='downsquare  ai'><AiOutlineDownSquare/></div>
        <div className='Completion-p'>Completion period</div>
        <div className='downsquare line'><AiOutlineDownSquare/></div>
        <div className='total-enrolled'>Total Enrolled</div>
        <div className='downsquare'><AiOutlineDownSquare/></div>
        <div className='qualified'>Qualified Candidates</div>
        <div className='downsquare'><AiOutlineDownSquare/></div>
        </div>
        <div className='title-completionperiod'>
          <div className='title-productdesign'>
          <h3 className='heading3'>Product Design GVI</h3>
          <p>Lorem ipsum dolor sit amet <br/>
          consectetur adipisicing elit.</p>
          </div>
          
          <div className='hundered-twenty'>
            <p>120 days <br/>(created on 10/12/2021)</p>
          </div>
          <div className='colorpurple top'>20,000</div>
          <br/>
   <div className='rectangle-wrapper'>    
 
      <img className='barchart' src={Row} alt="" />


  </div>  
 
  {/* <div className='barchartoutline'><BarChartOutlinedIcon /></div> 
  <div><HiOutlineUsers /></div> 
  <div><WorkspacesOutlinedIcon/></div>  */}
  <div>
   <img src={Buttons}/>
  </div>

 
      
        </div>

        {/* 4times */}
        <div className='title-completionperiod'>
          <div className='title-productdesign'>
          <h3 className='heading3'>Product Design GVI</h3>
          <p>Lorem ipsum dolor sit amet <br/>
          consectetur adipisicing elit.</p>
          </div>
          
          <div  className='hundered-twenty'>
            <p>120 days <br/>(created on 10/12/2021)</p>
          </div>
          <div  className='colorpurple'>20,000</div>
          <br/>
   <div className='rectangle-wrapper'>    
 
        <img className='barchart' src={Row} alt="" />


  </div>  
  {/* <div className='barchartoutlined'><BarChartOutlinedIcon /></div> 
  <div className='hioutline'><HiOutlineUsers /></div> 
  <div className='workspace'><WorkspacesOutlinedIcon  /></div>  */}
   <div>
   <img src={Buttons}/>
  </div>


      
        </div>

        <div className='title-completionperiod'>
          <div className='title-productdesign'>
          <h3 className='heading3'>Product Design GVI</h3>
          <p>Lorem ipsum dolor sit amet <br/>
          consectetur adipisicing elit.</p>
          </div>
          
          <div className='hundered-twenty'>
            <p>120 days <br/>(created on 10/12/2021)</p>
          </div>
          <div  className='colorpurple'>20,000</div>
          <br/>
   <div className='rectangle-wrapper'>    
 
        <img className='barchart' src={Row} alt="" />


  </div>  
  {/* <div><BarChartOutlinedIcon /></div> 
  <div><HiOutlineUsers /></div> 
  <div><WorkspacesOutlinedIcon  /></div>  */}
   <div>
   <img src={Buttons}/>
  </div>


      
        </div>
        <div className='title-completionperiod'>
          <div className='title-productdesign'>
          <h3 className='heading3'>Product Design GVI</h3>
          <p>Lorem ipsum dolor sit amet <br/>
          consectetur adipisicing elit.</p>
          </div>
          
          <div className='hundered-twenty'>
            <p>120 days <br/>(created on 10/12/2021)</p>
          </div>
          <div  className='colorpurple'>20,000</div>
          <br/>
   <div className='rectangle-wrapper'>    
 
        <img className='barchart' src={Row} alt="" />


  </div>  
  {/* <div><BarChartOutlinedIcon /></div> 
  <div><HiOutlineUsers /></div> 
  <div><WorkspacesOutlinedIcon  /></div>  */}
   <div>
   <img src={Buttons}/>
  </div>


      
        </div>

        <div className='title-completionperiod'>
          <div className='title-productdesign'>
          <h3 className='heading3'>Product Design GVI</h3>
          <p>Lorem ipsum dolor sit amet <br/>
          consectetur adipisicing elit.</p>
          </div>
          
          <div className='hundered-twenty'>
            <p>120 days <br/>(created on 10/12/2021)</p>
          </div>
          <div  className='colorpurple'>20,000</div>
          <br/>
   <div className='rectangle-wrapper'>    
 
        <img className='barchart' src={Row} alt="" />


  </div>  
  {/* <div><BarChartOutlinedIcon /></div> 
  <div><HiOutlineUsers /></div> 
  <div><WorkspacesOutlinedIcon  /></div>  */}
 <div>
   <img src={Buttons}/>
  </div>

      
        </div>

     
    </div>
    </>
  )
}

export default Middlepage;