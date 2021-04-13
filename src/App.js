import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/pages/appointment/Appointment";
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
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
