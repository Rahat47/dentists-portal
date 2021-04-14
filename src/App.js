import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPatients from "./components/pages/allPatients/AllPatients";
import Appointment from "./components/pages/appointment/Appointment";
import AddDoctor from "./components/pages/dashboard/addDoctor/AddDoctor";
import Dashboard from "./components/pages/dashboard/dashboard/Dashboard";
import Home from './components/pages/home/Home';
import Login from "./components/pages/login/Login";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/allPatient" component={AllPatients} />
          <Route exact path="/doctor/add-doctor" component={AddDoctor} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
