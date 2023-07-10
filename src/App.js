import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark nav position-static">
				<div className="col-md col align-self-center">
					<img
						src={logo}
						className=" float-start"
						height="50"
						alt="logo"
					/>
				</div>
				<div className="navbar-collapse collapse col">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#services">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="col-md col d-none d-lg-flex flex-row justify-content-lg-end justify-content-center">
					<p className="text-white my-auto d-none d-lg-flex">
						(972)946-5331
					</p>
					<div className="px-4">
						<button className="btn btn-outline-success">
							CALL
						</button>
					</div>
					
				</div>

				<div className="px-4">
						<button className="btn btn-outline-info d-lg-none d-flex">
							CALL (972)946-5331
						</button>
				</div>
				<div className="col d-lg-none d-flex justify-content-end">
					<div className="dropdown px-3">
						<button
							className="btn btn-secondary navbar-toggler px-3"
							type="button"
							data-bs-toggle="dropdown"
							data-bs-auto-close="true"
							aria-expanded="false"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							<li>
								<a className="dropdown-item" href="#">
									Home
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#services">
									Services
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									About
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<section id="home">
				<img
					src="./img/DeckCleaningGradient.png"
					className="vh-100 w-100 object-fit-cover img-gradiant z-0"
					alt="..."
				></img>
				<div className=" position-absolute top-50 start-50 translate-middle">
					<h1 className="text-white fw-bold fs-1">
						Dallas PressureWash Pros
					</h1>
					<p className="text-white fs-4">
						We are the best in the business
					</p>
					<a className="btn btn-info text-dark fw-medium fs-3 m-3 " href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation" target="blank">
						Book Now
					</a>
					<button className="btn btn-info text-dark fw-medium fs-3 m-3" href="tel:9729465331">
						Call Us
					</button>
				</div>
			</section>
			<section id="services" className="container">
				<h1 className="">Our Services</h1>
				<div className="row p-3">
					<img src="./img/ServiceDriveway.png" className="img-fluid col-6 col-xl-3 h-100 m-auto" alt="..."></img>
					<div className="col-xl col-12">
						<h2 className="text-xl-start text-center">Driveway Cleaning</h2>
						<p className="fs-5 paragraph">Revitalize your driveway with our professional pressure washing service! At Dallas Powerwash Pros, we specialize in driveway cleaning that leaves your property looking fresh and pristine. We pay meticulous attention to detail, ensuring that every nook and cranny is thoroughly cleaned. With our expertise, your driveway will be transformed into a welcoming space, enhancing the overall aesthetics of your property.</p>
					</div>
				</div>
				<div className="row p-3">
					<img src="./img/ServiceSiding.png" className="img-fluid col-6 col-xl-3 h-100 m-auto" alt="..."></img>
					<div className="col-xl col-12">
						<h2 className="text-xl-start text-center">Siding Cleaning</h2>
						<p className="fs-5 paragraph">Revive the beauty of your home's siding with our professional soft washing service at Dallas Powerwash Pros. Over time, siding can accumulate dirt, mildew, algae, and other contaminants. Soft washing is a safe and effective cleaning method that uses low-pressure techniques and environmentally-friendly solutions to gently remove dirt and grime. Whether you have vinyl, wood, stucco, or any other type of siding, we tailor our approach to ensure optimal results. Trust Dallas Powerwash Pros to deliver exceptional results, prompt service, and unmatched customer satisfaction.</p>
					</div>
				</div>
				<div className="row p-3">	
					<img src="./img/ServiceRoof.png" className="img-fluid col-6 col-xl-3 h-100 m-auto" alt="..."></img>
					<div className="col-xl col-12">
						<h2 className="text-xl-start text-center">Roof Cleaning</h2>
						<p className="fs-5 paragraph">Transform the appearance of your roof with our expert roof cleaning services at Dallas Powerwash Pros. Over time, roofs can become plagued by unsightly stains, moss, algae, and debris, which not only diminish their visual appeal but also compromise their longevity and structural integrity. Using industry-approved techniques and eco-friendly cleaning solutions, we'll remove stubborn stains, moss, and algae, restoring your roof to its original beauty. Let us revitalize your roof, improve its durability, and enhance the overall aesthetic of your home.</p>
					</div>
				</div>
				<div className="row p-3">
					<img src="./img/ServiceDecks.png" className="img-fluid col-6 col-xl-3 h-100 m-auto" alt="..."></img>
					<div className="col-xl col-12">
						<h2 className="text-xl-start text-center">Deck Cleaning & Staining</h2>
						<p className="fs-5 lg paragraph">Transform your weathered wood deck into a stunning outdoor oasis with our comprehensive deck cleaning and staining services. At Dallas Powerwash Pros, we specialize in reviving and protecting wooden decks, ensuring they stand the test of time while maintaining their natural beauty. We pay meticulous attention to detail, ensuring every inch of your deck is rejuvenated. Once the deck is clean and dry, we expertly apply high-quality wood stains or sealants, carefully chosen to enhance the natural grain and color of your deck while providing superior protection against the elements. Our goal is to create a deck that not only looks stunning but also withstands the rigors of outdoor conditions for years to come. </p>
					</div>
				</div>
			</section>
			<footer className="container-fluid bg-dark text-white">

			</footer>
		</div>
	);
}

export default App;
