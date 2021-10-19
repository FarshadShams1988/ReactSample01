import '../../css/all.css'
import '../../css/screen.css'
import {NavLink} from "react-router-dom";

const MainDashboard = () => {
	return(
		<>
			<div id="wrapper">
				<div className="wrapper-holder grey">
					<section id="main">
						<h2>Here are my biggest achievements</h2>
						<div className="box_timeline_holder">
							<div className="box_timeline">
								<ul>
									<li>
										<div className="date">
											<span>12/09</span>
										</div>
										<h3>tempora incidunt</h3>
										<p>Dolor sit consectetur adipisicing elit, sed do eiusmod tempor</p>
									</li>
									<li>
										<div className="date">
											<span>02/10</span>
										</div>
										<h3>nemo enim ipsam</h3>
										<p>Laudantium totam rem aperiam eaque ipsa quae</p>
									</li>
									<li>
										<div className="date">
											<span>09/11</span>
										</div>
										<h3>unde omnis iste</h3>
										<p>Eaque ipsa quae illo inventore veritatis et quasi architecto </p>
									</li>
									<li>
										<div className="date">
											<span>06/12</span>
										</div>
										<h3>porro quisquam</h3>
										<p>Dolorem ipsum quia consectetur adipisci velit sed quia non</p>
									</li>
									<li>
										<div className="date">
											<span>11/13</span>
										</div>
										<h3>dolorem eum</h3>
										<p>Nodi tempora incidunt ut labore dolore magnam</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
				<footer id="footer">
					<div className="footer-content">
						<ul className="social">
							<li className="email"><a href="#">Email</a></li>
							<li className="facebook"><a href="#">Facebook</a></li>
							<li className="google"><a href="#">Google+</a></li>
							<li className="twitter"><a href="#">Twitter</a></li>
							<li className="pinterest"><a href="#">Pinterest</a></li>
						</ul>
						<p className="copy">Copyright 2014 John Markowitz. All rights reserved.</p>
					</div>
				</footer>
			</div>
		</>
	)
}
export default MainDashboard;

