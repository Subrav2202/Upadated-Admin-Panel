import Commongrid from "../Commongrid"
import Header from "../Header/Header";

function Regional() {
    return (
        <div>
        <Header id="regional"/>
        <Commongrid id={0} title={"Regional Data Tables"} p1={"Center Request"} p2={"Regional Data Table"} header={"Basic Table"}/>
    </div>
    )
}

export default Regional

