import React from 'react';
import ReactDOM from 'react-dom/client';
import Movies from './Component/movies'
import Home from './Layout/Home'
import { BrowserRouter, Redirect, Routes, Route } from "react-router-dom";
import Admindash from './Layout/admindash'
import AddMovie from './Layout/admin/addmovie'
import Signup from './Component/signup'
import UserLogin from './Component/userlogin'
import TopRated from './Component/TopMovies'
import TopReviews from './Component/TopReviews'
import UserAddition from './Layout/AddingByUser'
import Footer from './Component/footer'
import AddMov from './Layout/AddMovieUser'
import Users from './Component/Users';
import Useracc from './Layout/MovieAcceptance'
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
         <Route index element={<Home />} />
         <Route path="/home" element={<Home/>}/>
         <Route path="/topR" element={<TopRated/>}/>
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/AddMovie" element={<AddMovie/>} />
          <Route path="/AdminDash" element={<Admindash/>} />
          <Route path="/SignUp" element={<Signup/>} />
          <Route path="/Login" element={<UserLogin/>} />
          <Route path="/rev" element={<TopReviews/>} />
          <Route path="/Add" element={<UserAddition/>} />
          <Route path="/Addmov" element={<AddMov/>} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/Useracc" element={<Useracc/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
   </>
  );
}





root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
