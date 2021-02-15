import React from "react";
import Ainsertmodal from "../../Areawise/Ainsertmodal";
import Rinsertmodal from "../../Regional/Rinsertmodal"
import Dinsertmodal from "../../Divisional/Dinsertmodal"

function Whichcenter({ id, show, onHide }) {
  switch (id) {
    case "areawise":
        return(
      <Ainsertmodal show={show} onHide={onHide} />
        );
      break;
    case "regional":
        return(
      <Rinsertmodal show={show} onHide={onHide} />
        );
      break;
    case "divisional":
        return(
      <Dinsertmodal show={show} onHide={onHide} />
        );
      break;
    default:
        <Ainsertmodal show={show} onHide={onHide} />;
      break;
  }
}

export default Whichcenter;
