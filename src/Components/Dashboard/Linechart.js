import React from 'react'
import { Chart } from 'react-charts'
//import { Data } from "./Data";
 
function Linechart() {
  const data = React.useMemo(
    () =>{return ({
        
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    })} 
      
     ,
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
     
    ],
    []
  )
 
  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
  
      <Chart data={data} axes={axes} />
    
  )
}
export default Linechart