import Commongrid from "../Commongrid"
import Header from "../Header/Header";

function Divisional() {
    return (
        <div>
        <Header id="divisional"/>
        <Commongrid id={0} title={"Divisional Data Tables"} p1={"Divisional"} p2={"Divisional List"} header={"Category Table"}/>
    </div>
    )
}

export default Divisional

