
import React from "react";
import Header from "./Components/Header";
import Middlepage from "./Components/Middlepage";
import Navbar from "./Components/Navbar";
// import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { height } from "@mui/system";
  
  
const App = () => {
  
return (

    <>
      <Navbar />
     <Header />
    <Middlepage />
    {/* <Chart
      data={data}
    >
      <ArgumentAxis  />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument"  />
    </Chart> */}
  </>
);
}
  
export default App;

