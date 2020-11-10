import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import Dashboard from './Pages/Dashboard';
import Details from './Pages/Details';
import Akomodasi from './Pages/Akomodasi';
import ListWisata from './Pages/ListWisata';
import Profile from './Pages/Profile';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import NavbarTop from './Components/NavbarTop';


ReactDOM.render(
  <React.StrictMode>
  
    <Router>
      <div>
        <Switch>
                            <Route
                              name="Home"
                              path="/dashboard"
                              exact component={Dashboard}>
                            </Route>

                            <Route
                              name="Details"
                              path="/details"
                              exact component={Details}>
                            </Route>

                            <Route
                              name="List Wisata"
                              path="/list_wisata"
                              component={ListWisata}>
                            </Route>

                            <Route
                              name="Akomodasi"
                              path="/akomodasi"
                              component={Akomodasi}>
                            </Route>

                            <Route
                              name="Sign Up"
                              path="/sign_up"
                              component={SignUp}>
                            </Route>

                            <Route
                              name="Sign In"
                              path="/sign_in"
                              component={SignIn}>
                            </Route>

                
                        </Switch>
      </div>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
