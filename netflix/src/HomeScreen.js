import React from 'react'
import Navbar from '../src/components/Navbar';
import requests from '../src/utils/requests';
import Row from '../src/components/Row'
import Banner from './components/Banner';

function HomeScreen() {
    const {api,urls} = requests;
    return (
        <div className="homeScreen">
            <Navbar />

            <Banner />

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
        </div>
    )
}

export default HomeScreen;