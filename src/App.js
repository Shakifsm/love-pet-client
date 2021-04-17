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
import AddReview from './components/Dashboard/Dashboard/AddReview/AddReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllAppointments from './components/Dashboard/Dashboard/AllAppointments/AllAppointments';


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
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/AddService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <PrivateRoute path="/allAppointmets">
              <AllAppointments></AllAppointments>
            </PrivateRoute>
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
