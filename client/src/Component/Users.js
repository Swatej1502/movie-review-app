import Header from "./header";
import { useLocation } from 'react-router-dom';

export default function Users(){
    const location = useLocation();
    return(
        <>
        <Header/>
        <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="title">
          <h2>User id:</h2>
        </div>
        <div className="body">
         <h4>movie name:</h4>
        </div>
        <div className="footer">
          <h4>Are you sure you want to add movie?</h4>
        </div>
      </div>
    </div>
        </>
    )
}