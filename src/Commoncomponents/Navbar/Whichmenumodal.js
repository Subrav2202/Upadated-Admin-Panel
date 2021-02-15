import React from "react";
import Categorymenu from "../../Components/ProviderRequest/Category/Categorymenu";
import Serviceprovidermenu from "../../Components/ProviderRequest/Serviceprovider/Serviceprovidermenu";
import Dashboardmenu  from "../../Components/Dashboard/Dashboardmenu";
function Whichmenumodal({ id,show,onHide }) {
  switch (id) {
    case "category":
      return<Categorymenu id={id} view={show} close={onHide}/>
      break;
      case "serviceprovider":
        return <Serviceprovidermenu id={id} view={show} close={onHide}/>
        break;
      case "dashboard":
        return <Dashboardmenu view={show} close={onHide}/>
        break;
    //     case allcenters:
    //         return <Allcentermenu />
    //         break;
    default:
        // return <Dashboardmenu/>
      break;
  }
}

export default Whichmenumodal;
