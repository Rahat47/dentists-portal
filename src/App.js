import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/pages/appointment/Appointment";
import Home from './components/pages/home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/appointment" component={Appointment} />
      </Switch>
    </Router>
  );
}

export default App;
