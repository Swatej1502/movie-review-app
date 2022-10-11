import '../session/session';
import Header from '../Component/header';
import AddMovie from './AddMovieUser';
import Session from '../session/session';
import User from './MovieAcceptance';
export default function Add(){
    const verif=Session.getverif();
    const msg =Session.getmsg();
    return(
        <>
        {msg && <User/>}
         {verif && <AddMovie/>}
         
        </>
    );
}