import Header from '../Component/header'
import { useLocation } from 'react-router-dom';
import React from 'react'
import Session from '../session/session';
import { useState, useEffect } from 'react'
import Axios from 'axios';
Axios.defaults.withCredentials = true;




//movies
export default function Movies() {
    const [data, setData] = useState([]);

    const location = useLocation();
    Session.setmid(location.state.id);
    var x = 0, count = 0;
    const getData = () => {
        fetch('http://localhost:3001/Myrating'
            , {

                headers: {

                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])


    { data.map((item2) => { if (location.state.id == item2.movie_id) { x = x + item2.rating; count++; } }) }
    return (
        <>
            <Header />
            <div class="main-content">

                <div class="page">
                    <div class="container">

                        <div class="content">
                            <div class="row">
                                <div class="col-md-6">
                                    <figure class="movie-poster"><img class="imgsize" src={location.state.url} alt="#" /></figure>
                                </div>
                                <div class="col-md-6">
                                    <h2 class="movie-title">{location.state.name}</h2>
                                    <div class="movie-summary">


                                    </div>
                                    <ul class="movie-meta">
                                        <li><strong>Rating    :{x / count} out of 10 </strong>


                                        </li>
                                        <li><strong>Release  :</strong> {location.state.year}</li>
                                        <li><strong>Langauge  :</strong> {location.state.language}</li>
                                        <li><strong>Genre  :</strong> {location.state.genre}</li>
                                    </ul>


                                </div>
                                <div><h1>Reviews Given By People:</h1></div>
                                <div class="row ">
                                    {data.map((item) => {
                                        if (location.state.id == item.movie_id) {
                                            return (
                                                <div class="col-lg-3">
                                                    <div class="row">
                                                        <div class=" review-box ">
                                                            <h4>{item.user_id} Says</h4>
                                                            <div class="col-lg-3">
                                                                <img class="test-img" src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
                                                            </div>
                                                            <div class="col-lg-9">
                                                                <span>{item.rating}/10</ span>
                                                                <p>{item.value}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>

    )

}