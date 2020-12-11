import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Shop from './Shop';
import Login from './Login';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import ControlPanel from './ControlPanel';
import { Provider } from 'react-redux';
import store from '../store/store';
import ProductDetails from './ProductDetails';
//import Home from './Home';
import Cart from './Cart';
import PlaceOrder from './PlaceOrder';
import ThankYou from './ThankYou';
import Orders from './Orders';


function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/"  component={Shop} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/forget-password" component={ForgetPassword} />
              <Route exact path="/cpanel" component={ControlPanel} />
              <Route exact path="/products/:category/:slug" component={ProductDetails} />
              <Route path="/products"  component={Shop} />
              <PrivateRoute exact path="/cart" component={Cart} />
              <PrivateRoute exact path="/place-order" component={PlaceOrder} />
              <PrivateRoute exact path="/thank-you" component={ThankYou} />
              <PrivateRoute exact path="/orders" component={Orders} />
             
              
            </Switch>
            
          
        </div>
      </Router>
    </Provider>
      
    
    
  );
}

export default App;
