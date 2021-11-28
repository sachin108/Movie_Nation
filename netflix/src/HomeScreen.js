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

            <Row className="xyz"
                title='NETFLIX ORIGINALS'
                fetchUrl = {urls.fetchNetflixOriginals}
                isLargeRow
            />
            <Row className="xyz"
                title='Trending Now'
                fetchUrl = {urls.fetchTrending}
                isLargeRow
            />
            <Row className="xyz"
                title='Top Rated'
                fetchUrl = {urls.fetchTopRated}
                isLargeRow
            />
            <Row className="xyz"
                title='Action Movies'
                fetchUrl = {urls.fetchActionMovies}
                isLargeRow
            />
            <Row className="xyz"
                title='Comedy Movies'
                fetchUrl = {urls.fetchComedyMovies}
                isLargeRow
            />
            <Row className="xyz"
                title='Horror Movies'
                fetchUrl = {urls.fetchHorrorMovies}
                isLargeRow
            />
            <Row className="xyz"
                title='Romance Movies'
                fetchUrl = {urls.fetchRomanceMovies}
                isLargeRow
            />
            <Row    className="xyz"
                title='Documentaries'
                fetchUrl = {urls.fetchDocumentaries}
                isLargeRow
            />
        </div>
    )
}

export default HomeScreen;