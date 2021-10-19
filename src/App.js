import {ProductContainer} from "./Components/Product/ProductContainer";
import MainDashboard from "./Components/Dashboard/MainDashboard";
import "../src/css/App.css";
import '../src/css/all.css'
import '../src/css/screen.css'

import {Route, BrowserRouter as Router, Switch, NavLink} from "react-router-dom";

export const App = () => {
	return (
		<Router>
			<div id="wrapper">
				<div className="wrapper-holder">
					<header id="header">
						<a className="menu_trigger" href="#">menu</a>
						<nav id="nav">
							<ul>
								<li><NavLink className="nav-link" activeClassName="activeLink" to="/" exact >داشبورد</NavLink></li>
								<li><NavLink className="nav-link" activeClassName="activeLink" to="/product" exact >محصول</NavLink></li>
								<li><a href="Portfolio.html">Portfolio</a></li>
								<li><a href="Contact.html">Contact</a></li>
							</ul>
						</nav>
						<h1 className="logo">Sample React</h1>
						<h2 className="slogan">Professional Web Designer</h2>
					</header>
				</div>
			</div>
				<Switch>
					<Route path="/product" exact component={ProductContainer}/>
					<Route path="/" exact component={MainDashboard}/>
				</Switch>
		</Router>
	)
}

export default App