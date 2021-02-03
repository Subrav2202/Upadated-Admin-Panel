import React, { useState, useEffect } from "react";
import axios from "axios";
//import Datatabledata from "./Datatabledata"

function Data() {
  const [userData, setUserData] = useState({});
  

  useEffect(() => {
    async function anonymous() 
    {
      const response = await axios.post(
        "https://helpearnnode-7uw2e.ondigitalocean.app/"
      );
      console.log(response)
      setUserData(response);
    };
    anonymous() ;
  }, []);

  return userData;
}

export default Data;
