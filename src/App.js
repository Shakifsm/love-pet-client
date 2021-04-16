import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Appoinment from './components/Appoinment/Appoinment/Appoinment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import AddService from './components/Dashboard/AddService/AddService';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/AddService">
              <AddService></AddService>
            </Route>
            <Route path="/appoinment">
              <Appoinment></Appoinment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
