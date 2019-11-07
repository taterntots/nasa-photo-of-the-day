import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

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
            <Header date={photo.date} title={photo.title} />
            <Body hdurl={photo.hdurl} explanation={photo.explanation} />
            <Footer />
        </div>
    )
}