import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

export default function DailyPhoto() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DESCjsuuPZBfTZSIzfMBNAiIKVD8LvPcoatRSyID')
            .then(response => {
                setPhoto(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("The data hates your guts.", error);
            })
    }, [])

    return(
        <div className='photo'>
            <Header date={photo.date}/>
            <img className='dailyImage' alt='space stuff' src={photo.hdurl}/>
            <h2>{photo.title}</h2>
            <p>{photo.explanation}</p>
            <Footer />
        </div>
    )
}