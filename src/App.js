
// import Header from "./Components/Header";
// import Middlepage from "./Components/Middlepage";
// import Navbar from "./Components/Navbar";
// function App() {
//   return (
//     <div className="App">
//    <Navbar />
//    <Header />
//    <Middlepage />
//     </div>
//   );
// }

// export default App;
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
  
// Sample data
const data = [
  { argument: 'monday', value: 30 },
  { argument: 'Tuesday', value: 20 },
  { argument: 'Wednesday', value: 10 },
  { argument: 'Thursday', value: 50 },
  { argument: 'Friday', value: 60 },
  {argument:'saturday', value:70 },
  {argument:'saturday', value:70 },
  {argument:'sunday', value:40 },
  {argument:'day1', value:44 },
  



];
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

