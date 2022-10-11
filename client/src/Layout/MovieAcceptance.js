import '../session/session';
import Session from '../session/session';
import React, { useState } from "react";
import "./Modal.css";
import Header from '../Component/header';



function Modal() {
  
  
  
  return (<>
    <Header/>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="title">
          <h2>Lets wait......</h2>
        </div>
        <div className="body">
         <h4>Waiting for admin response for Adding your movie</h4>
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
   
 </> );
        }

export default Modal;

