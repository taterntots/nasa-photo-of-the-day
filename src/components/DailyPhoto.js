import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <h2>{photo.date}</h2>
            <img className='dailyImage' alt='space stuff' src={photo.hdurl}/>
            <p>{photo.explanation}</p>
        </div>
    )
}