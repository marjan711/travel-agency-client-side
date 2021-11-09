import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import Service from './Components/Service.js/Service';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import AddServices from './Components/AddServices/AddServices';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import MyOrders from './Components/Myorders/MyOrders';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import  NotFound  from './Components/NotFound/NotFound';
import PrivateRoute from './Private/PrivateRoute';
import Admin from './Components/Admin/Admin';
import ManageOrders from './Components/Admin/ManageOrders/ManageOrders';





function App() {
  return (
    <div className="App">

    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>

            <Route exact path="/">
               <Home></Home>
            </Route>

            <Route  path="/home">
               <Home></Home>
            </Route>

            <Route exact path="/services">
               <Services></Services>
            </Route>

            <Route path="/services/:serviceId">
              <Service></Service>
            </Route>

            <PrivateRoute path="/addservice">
              <AddServices></AddServices>
            </PrivateRoute>

            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>



            <Route path="/login">
              <Login></Login>
            </Route>


            <PrivateRoute path="/order/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/admin">
              <Admin></Admin>
            </Route>

            <Route  path="*">
             <NotFound></NotFound>
            </Route>

      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
