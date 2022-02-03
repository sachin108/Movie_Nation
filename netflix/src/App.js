import "./App.css";
import requests from "./utils/requests";
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import { useDispatch,useSelector } from "react-redux";
import { login,logout,selectUser } from './features/userSlice';
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";


function App() {
	const { api, urls } = requests;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
        })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  
	return (
		<div className="app">
			<Router>
			{!user ? (
			  <LoginScreen />
			) : (
			  <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
			</Switch>
			)}
			</Router>

		</div>
	);
}

export default App;
