import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route,Redirect} from "react-router-dom";
import Areawise from "./Components/Areawise/Areawise";
import  Service  from "./Components/Service/Service";
import Divisional from "./Components/Divisional/Divisional";
import Providerrequest from "./Components/ProviderRequest/Providerrequest";
import Regional from "./Components/Regional/Regional"
import Servicenters from "./Components/Servicecneters/Servicecenters"
import  Dashboard  from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Areawise} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/divisional" component={Divisional} />
      <Route exact path="/provider request" component={Providerrequest} />
      <Route exact path="/regional" component={Regional} />
      <Route exact path="/servicenters" component={Servicenters} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
