import logo from './logo.png'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Session from '../session/session';
function MyLinks() {
	const nav = useNavigate();
	function logout() {
		Session.setrole(false);
		sessionStorage.setItem("key", null);
		nav('/');
	}


	var session = sessionStorage.getItem("key");
	//alert(Session.getrole()==0)
	if (Session.getrole() == false && session == 'null') {

		return (
			<>

				<li class="menu-item"><Link to="/">Give a Review</Link></li>
				<li class="menu-item"><Link to="/topR">Top 10 Rated Movies</Link></li>
				<li class="menu-item"><Link to="/Login">Login</Link></li>
				<li class="menu-item"><Link to="/SignUp">Sign Up</Link></li>


			</>)
	}
	else if (Session.getrole() == 0 && session != 'null') {
		return (
			<>
				<li class="menu-item ">  <Link to="/"> Give a review</Link></li>
				<li class="menu-item"><Link to="/topR">Top 10 Rated Movies</Link></li>
				<li class="menu-item"><Link to="/Add">Add Movies</Link></li>
				<li class="menu-item">
					<input type="button"
						class="text-centre mybtn"
						name="submit"
						value="Logout"
						onClick={() => logout()} />

				</li>



			</>)
	}
	else if (Session.getrole() == 1 && session != 'null') {
		return (
			<>
			    <li class="menu-item "> <span></span> Welcome Admin</li>
				<li class="menu-item ">  <Link to="/"> Give a review</Link></li>
				<li class="menu-item"><Link to="/topR">Top 10 Rated Movies</Link></li>
				<li class="menu-item"><Link to="/AddMovie">Add movies</Link></li>
				<li class="menu-item"><Link to="/Users">Users</Link></li>
				<li class="menu-item">
					<input type="button"
						class="text-centre mybtn"
						name="submit"
						value="Logout"
						onClick={() => logout()} />

				</li>



			</>)
	}else if (Session.getrole() == 2 && session != 'null') {
		return (
			<>
				<li class="menu-item "> <span>  |</span> Welcome Critic</li>
				<li class="menu-item ">  <Link to="/"> Give a Review</Link></li>
				<li class="menu-item"><Link to="/topR">Top 10 Rated movies</Link></li>
				<li class="menu-item">
					<input type="button"
						class="text-centre mybtn"
						name="submit"
						value="Logout"
						onClick={() => logout()} />

				</li>



			</>)
	}

}

function Header() {

	return (
		<>
			<div id="site-content">
				<div class="site-header">
					<div class="container my-nav">
						<a id="branding">
							<img src={logo} alt="" class="logo" />
							<div class="logo-copy">
								<h1 class="site-title">MOVIE_REVIEW.com</h1 >
								<small class="site-description">Give a review for your favourite movie</small>
							</div> 
						</a>
						<div class="main-navigation my-n">
							<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
							<ul class="menu ">
								<MyLinks />
							</ul>

							

							<div class="mobile-navigation"></div>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	)


}


export default Header;