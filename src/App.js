import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { auth } from './components/Firebase/Firebase';
import { useStateValue } from './components/Context_API/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header from './components/Header/Header'
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Order/Orders';


function App() {
  const [{ }, dispatch] = useStateValue()
  
  const stripePromise = loadStripe('pk_test_51IPMKXBvET1KMuiVAsUrPSwa5oMaqI7ya39IuT1OmMeMz9I6oI4FiPYRCP5CvTsFCvhd4ZyflNoUSzsVLQncrUZX00tv7Z4VNY')

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    // BEM convention for classname --> 'app'
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />  
            <Elements stripe={stripePromise}>
              <Payment /> 
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
