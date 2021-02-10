import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route,Redirect} from "react-router-dom";
import  Login  from "./Components/Login/Login";
import Areawise from "./Components/Areawise/Areawise";
import  Service  from "./Components/Service/Service";
import Divisional from "./Components/Divisional/Divisional";
import Category from "./Components/ProviderRequest/Category/Category";
import Regional from "./Components/Regional/Regional"
import Servicenters from "./Components/Servicecneters/Servicecenters"
import  Dashboard  from "./Components/Dashboard/Dashboard";
import Serviceprovider from "./Components/ProviderRequest/Serviceprovider/Serviceprovider";
import Allcenters from "./Components/Authorised center/Allcenters";

function App() {
  return (
    <Switch>
    <Route exact path="/" component={Login} />
      <Route exact path="/areawise" component={Areawise} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/divisional" component={Divisional} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/service provider" component={Serviceprovider} />
      <Route exact path="/All centers" component={Allcenters} />
      <Route exact path="/regional" component={Regional} />
      <Route exact path="/servicenters" component={Servicenters} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
