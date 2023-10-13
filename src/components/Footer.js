import React, {useEffect} from "react";

function Footer() {
	const linkOnHover = (e) => {
		e.target.className = "text-black text-decoration-underline";
	};
	const linkExit = (e) => {
		e.target.className = "text-black text-decoration-none";
	};
	useEffect(() => {
		const pElements = document.getElementsByClassName("footer-link");
		for (let i = 0; i < pElements.length; i++) {
			pElements[i].className =
				"text-start text-black text-decoration-none";
		}
	}, []);
	return (
		<footer className="container">
			<div className="row row-cols-2 row-cols-md-4 py-4">
				<div className="col">
					<h3 className="text-start">Contact Us</h3>
					<p className="text-start">
						<a
							className="text-black text-decoration-none"
							href="mailto:info@dallaspowerwashpros.com"
							onMouseOver={linkOnHover}
							onMouseLeave={linkExit}
						>
							Email Us
						</a>
					</p>
					<p className="text-start">
						<a
							className="text-black text-decoration-none"
							href="tel:+1 9729465331"
							onMouseOver={linkOnHover}
							onMouseLeave={linkExit}
						>
							Call Us
						</a>
					</p>
					<p className="text-start">
						<a
							className="text-black text-decoration-none"
							href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation"
							onMouseOver={linkOnHover}
							onMouseLeave={linkExit}
						>
							Schedule
						</a>
					</p>
				</div>
				<div className="col">
					<h3 className="text-start">Socail</h3>
					<p className="text-start">
						<i class="bi bi-facebook"></i>
						<a
							className="text-black text-decoration-none"
							href="https://www.facebook.com/dallaspowerwashpros"
							onMouseOver={linkOnHover}
							onMouseLeave={linkExit}
						>
							Facebook
						</a>
					</p>
					<p className="text-start">
						<i class="bi bi-instagram"></i>
						<a
							className="text-black text-decoration-none"
							href="https://www.instagram.com/dallaspowerwashpros"
							onMouseOver={linkOnHover}
							onMouseLeave={linkExit}
						>
							Instagram
						</a>
					</p>
					<p className="text-start">
						<i class="bi bi-twitter-x"></i>
						<a
							className="text-black text-decoration-none"
							href="https://www.twitter.com/powerwash_pros"
							onMouseOver={linkOnHover}
							onMouseLeave={linkExit}
						>
							Twitter
						</a>
					</p>
					<p className="text-start">
						<i class="bi bi-pinterest"></i>
						<a
							className="text-black text-decoration-none"
							href="https://www.pinterest.com/DallasPowerWashPros/"
							onMouseOver={linkOnHover}
							onMouseLeave={linkExit}
						>
							Pinterest
						</a>
					</p>
				</div>
				<div className="col">
					<h3 className="text-start">Hours</h3>
					<table className="table table-borderless justify-content-start">
						<tr className="text-start">
							<td>Mon</td>
							<td>9am - 5pm</td>
						</tr>
						<tr className="text-start">
							<td>Tue</td>
							<td>9am - 5pm</td>
						</tr>
						<tr className="text-start">
							<td>Wed</td>
							<td>9am - 5pm</td>
						</tr>
						<tr className="text-start">
							<td>Thur</td>
							<td>9am - 5pm</td>
						</tr>
						<tr className="text-start">
							<td>Fri</td>
							<td>9am - 5pm</td>
						</tr>
						<tr className="text-start">
							<td>Sat</td>
							<td>Closed</td>
						</tr>
						<tr className="text-start">
							<td>Sun</td>
							<td>Closed</td>
						</tr>
					</table>
				</div>
				<div className="col">
					<h3 className="text-start">Service Area</h3>
					<img
						className="float-start img-fluid"
						src="https://maps.googleapis.com/maps/api/staticmap?center=32.930855, -96.801582&zoom=10&size=400x400&markers=color:red%7Clabel:%7C32.930855,-96.801582&key=AIzaSyCyvFSKl8NdCUj43297y7BGheOPKY3IFFQ"
					></img>
				</div>
			</div>

			<div className="bottom-bar">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p>&copy; 2023 Dallas Powerwash Pros</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
