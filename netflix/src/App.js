import "./App.css";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./utils/requests";
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import { useDispatch,useSelector } from "react-redux";
import { login,logout,selectUser } from './features/userSlice';
import ProfileScreen from "./ProfileScreen";


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  
	return (
		<div className="App">
			<Router>
			{!user ? (
			  <LoginScreen />
			) : (
			  <Switch>
			<Route path="/">
			<Navbar />
			<Row
				title="Trending TV Shows"
				fetchUrl={urls.weeklytrendingShows}
				type="series"
			/>
			<Row
				title="Trending Movies"
				fetchUrl={urls.weeklytrendingMovies}
				type="movies"
			/>
			<Row
				title="Top Rated Movies"
				fetchUrl={urls.topRatedMovies}
				type="movies"
			/>
			<Row
				title="Top Rated TV Shows"
				fetchUrl={urls.topRatedShows}
				type="series"
			/>
			<Row
				title="Popular TV Shows"
				fetchUrl={urls.popularShows}
				type="series"
			/>
            <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl = {urls.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title='Trending Now'
                fetchUrl = {urls.fetchTrending}
                isLargeRow
            />
            <Row 
                title='Top Rated'
                fetchUrl = {urls.fetchTopRated}
                isLargeRow
            />
            <Row 
                title='Action Movies'
                fetchUrl = {urls.fetchActionMovies}
                isLargeRow
            />
            <Row 
                title='Comedy Movies'
                fetchUrl = {urls.fetchComedyMovies}
                isLargeRow
            />
			<Row
				title="Trending Telugu Movies"
				fetchUrl="/movies/trending/telugu"
				localUrl={true}
				type="movies"
			/>
            <Row 
                title='Horror Movies'
                fetchUrl = {urls.fetchHorrorMovies}
                isLargeRow
            />
            <Row 
                title='Romance Movies'
                fetchUrl = {urls.fetchRomanceMovies}
                isLargeRow
            />
            <Row    
                title='Documentaries'
                fetchUrl = {urls.fetchDocumentaries}
                isLargeRow
            />
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
