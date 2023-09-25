import "./App.css";
import {animate, motion} from "framer-motion";
import {useEffect, useState} from "react";

function App() {
	const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 992px)").matches);
	const [isNavOpen, setIsNavOpen] = useState(false);
	window.addEventListener("resize", (event) => {setIsMobile(window.matchMedia("(max-width: 992px)").matches)});
	const hoverHandeler = (e) => {
		e.target.className = "bg-info rounded-pill text-dark nav-link"
	}
	const leaveHandeler = (e) => {
		e.target.className = "nav-link rounded-pill text-white"
	}
	useEffect(()=>{
		if (isNavOpen == false){
			animate("#navbar-mobile", {opacity: 0}, {duration: 1});
			setTimeout(()=>{document.getElementById("navbar-mobile").style.display = "none";}, 1000);
		}
		else if (isMobile == false) {
			animate("#navbar-mobile", {opacity: 0}, {duration: 1})
			setTimeout(()=>{document.getElementById("navbar-mobile").style.display = "none";}, 1000);
			setIsNavOpen(false);	
		}
		else{
			animate("#navbar-mobile", {opacity: 1}, {duration: 1});
			document.getElementById("navbar-mobile").style.display = "block";
		}
	}, [isNavOpen]);
	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark nav position-static">
				<div className="col-md col align-self-center">
					<img
						src="./img/1Asset.png"
						className=" float-start mx-4"
						height="50"
						alt="logo"
					/>
				</div>
				<div className="navbar-collapse collapse row-cols-auto">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item">
							<motion.a className="nav-link rounded-pill text-white" onMouseEnter={(e)=> hoverHandeler(e)} onMouseLeave={(e)=> leaveHandeler(e)} whileHover={{scale: 1.2}} transition={{ease:"easeIn", duration:.25}} href="#home">
								Home
							</motion.a>
						</li>
						<li className="nav-item">
							<motion.a className="nav-link rounded-pill text-white" onMouseEnter={(e)=> hoverHandeler(e)} onMouseLeave={(e)=> leaveHandeler(e)} whileHover={{scale: 1.2}} transition={{ease:"easeIn", duration:.25}} href="#services">
								Services
							</motion.a>
						</li>
						<li className="nav-item">
							<motion.a className="nav-link rounded-pill text-white" onMouseEnter={(e)=> hoverHandeler(e)} onMouseLeave={(e)=> leaveHandeler(e)} whileHover={{scale: 1.2}} transition={{ease:"easeIn", duration:.25}} href="#about">
								Abouts
							</motion.a>
						</li>
						<li className="nav-item">
							<motion.a className="nav-link rounded-pill text-white" onMouseEnter={(e)=> hoverHandeler(e)} onMouseLeave={(e)=> leaveHandeler(e)} whileHover={{scale: 1.2}} transition={{ease:"easeIn", duration:.25}} href="#contact">
								Contact
							</motion.a>
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
					<div className="px-3">
						<button
							className="btn btn-secondary navbar-toggler px-3"
							type="button"
							aria-expanded="false"
							onClick={()=>setIsNavOpen(true)}
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						
					</div>
				</div>
			</nav>
			<motion.div id="navbar-mobile" className="navbar vh-100 z-1 bg-white position-fixed start-0 top-0 col-12" initial={{opacity:0}}>
				<a className="fs-1 position-fixed top-0 end-0 p-5" onClick={()=>setIsNavOpen(false)} href="#">
					<span className="bi bi-x-lg text-black " ></span>
				</a>	
					<ul className="list-group fs-1 mx-auto position-fixed top-50 start-50 translate-middle">
						<li className="dropdown-item p-4">
							<a className="dropdown-item" href="#home" onClick={()=>setIsNavOpen(true)}>
								Home
							</a>
						</li>
						<li className="dropdown-item p-4">
							<a className="dropdown-item" href="#services" onClick={()=>setIsNavOpen(true)}>
								Services
							</a>
						</li>
						<li className="dropdown-item p-4">
							<a className="dropdown-item" href="#about" onClick={()=>setIsNavOpen(true)}>
								About
							</a>
						</li>
						<li className="dropdown-item p-4">
							<a className="dropdown-item" href="#contact" onClick={()=>setIsNavOpen(true)}>
								Contact
							</a>
						</li>
					</ul>
			</motion.div>
			<section id="home">
				<img
					src="./img/DeckCleaningGradientRescaled.png"
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
					<a
						className="btn btn-info text-dark fw-medium fs-3 m-3 "
						href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation"
						target="blank"
					>
						Book Now
					</a>
					<button
						className="btn btn-info text-dark fw-medium fs-3 m-3"
						href="tel:9729465331"
					>
						Call Us
					</button>
				</div>
			</section>
			<section id="services" className="container">
				<h1 className="">Our Services</h1>
				<div className="row align-items-end row-cols-1 row-cols-lg-4">
					<div className="col p-3">
						<h2 className="text-center">Driveway Cleaning</h2>
						<img
							src="./img/Driveway.png"
							className="img-fluid  m-auto rounded-5"
							alt="..."
						></img>
						<div className="col-xl col-12">
							<motion.button
								type="button"
								className="btn btn-primary rounded-pill m-3 align-top"
								whileHover={{scale: 1.2}}
								data-bs-toggle="modal"
								data-bs-target="#DrivewayServiceModal"
							>
								more
							</motion.button>
							<motion.div
								class="modal fade"
								id="DrivewayServiceModal"
								tabindex="-1"
								aria-labelledby="DrivewayServiceModalLabel"
								aria-hidden="true"
								initial={{scale:.3}}
								whileInView={{scale: 1 }}
								transition={{ type: "spring", damping: 13, bounce: 1, duration: 1 }}
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h1
												class="modal-title fs-5"
												id="DrivewayServiceModalLabel"
											>
												Driveway Cleaning
											</h1>
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<p className="fs-5 paragraph">
												Revitalize your driveway with
												our professional pressure
												washing service! At Dallas
												Powerwash Pros, we specialize in
												driveway cleaning that leaves
												your property looking fresh and
												pristine. We pay meticulous
												attention to detail, ensuring
												that every nook and cranny is
												thoroughly cleaned. With our
												expertise, your driveway will be
												transformed into a welcoming
												space, enhancing the overall
												aesthetics of your property.
											</p>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
												data-bs-dismiss="modal"
											>
												Close
											</button>
											<a
												class="btn btn-primary"
												href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation"
												target="blank"
											>
												Book Service
											</a>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
					<div className="col p-3">
						<h2 className="text-center">Siding Cleaning</h2>
						<img
							src="./img/Siding.png"
							className="img-fluid m-auto rounded-5"
							alt="..."
						></img>
						<div className="col-xl col-12">
							<motion.button
								type="button"
								className="btn btn-primary rounded-pill inline m-3"
								whileHover={{scale: 1.2}}
								data-bs-toggle="modal"
								data-bs-target="#SidingServiceModal"
							>
								more
							</motion.button>
							<motion.div
								class="modal fade"
								id="SidingServiceModal"
								tabindex="-1"
								aria-labelledby="SidingServiceModalLabel"
								aria-hidden="true"
								initial={{scale:.3}}
								whileInView={{scale: 1 }}
								transition={{ type: "spring", damping: 13, bounce: 1, duration: 1 }}
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h1
												class="modal-title fs-5"
												id="SidingServiceModalLabel"
											>
												Siding Cleaning
											</h1>
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<p className="fs-5 paragraph">
												Revive the beauty of your home's
												siding with our professional
												soft washing service at Dallas
												Powerwash Pros. Over time,
												siding can accumulate dirt,
												mildew, algae, and other
												contaminants. Soft washing is a
												safe and effective cleaning
												method that uses low-pressure
												techniques and
												environmentally-friendly
												solutions to gently remove dirt
												and grime. Whether you have
												vinyl, wood, stucco, or any
												other type of siding, we tailor
												our approach to ensure optimal
												results. Trust Dallas Powerwash
												Pros to deliver exceptional
												results, prompt service, and
												unmatched customer satisfaction.
											</p>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
												data-bs-dismiss="modal"
											>
												Close
											</button>
											<a
												class="btn btn-primary"
												href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation"
												target="blank"
											>
												Book Service
											</a>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
					<div className="col p-3">
						<h2 className="text-center">Roof Cleaning</h2>
						<img
							src="./img/Roof.png"
							className="img-fluid m-auto rounded-5"
							alt="..."
						></img>
						<div className="col-xl col-12">
							<motion.button
								type="button"
								className="btn btn-primary rounded-pill m-3"
								whileHover={{scale: 1.2}}
								data-bs-toggle="modal"
								data-bs-target="#RoofServiceModal"
							>
								more
							</motion.button>
							
							<motion.div
								class="modal"
								id="RoofServiceModal"
								tabindex="-1"
								aria-labelledby="RoofServiceModalLabel"
								aria-hidden="true"
								initial={{scale:.3}}
								whileInView={{scale: 1 }}
								transition={{ type: "spring", damping: 13, bounce: 1, duration: 1 }}
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h1
												class="modal-title fs-5"
												id="RoofServiceModalLabel"
											>
												Roof Cleaning
											</h1>
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<p className="fs-5 paragraph">
												Transform the appearance of your
												roof with our expert roof
												cleaning services at Dallas
												Powerwash Pros. Over time, roofs
												can become plagued by unsightly
												stains, moss, algae, and debris,
												which not only diminish their
												visual appeal but also
												compromise their longevity and
												structural integrity. Using
												industry-approved techniques and
												eco-friendly cleaning solutions,
												we'll remove stubborn stains,
												moss, and algae, restoring your
												roof to its original beauty. Let
												us revitalize your roof, improve
												its durability, and enhance the
												overall aesthetic of your home.
											</p>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
												data-bs-dismiss="modal"
											>
												Close
											</button>
											<a
												class="btn btn-primary"
												href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation"
												target="blank"
											>
												Book Service
											</a>
										</div>
									</div>
								</div>
							</motion.div>
							
						</div>
					</div>
					<div className="col p-3">
						<h2 className="text-center">Deck & Fence Staining</h2>
						<img
							src="./img/Deck.png"
							className="img-fluid m-auto rounded-5"
							alt="..."
						></img>
						<div className="col-xl col-12">
							<motion.button
								type="button"
								className="btn btn-primary rounded-pill m-3"
								whileHover={{scale: 1.2}}
								data-bs-toggle="modal"
								data-bs-target="#DeckServiceModal"
							>
								more
							</motion.button>
							<motion.div
								class="modal"
								id="DeckServiceModal"
								tabindex="-1"
								aria-labelledby="DeckServiceModalLabel"
								aria-hidden="true"
								initial={{scale:.3}}
								whileInView={{scale: 1 }}
								transition={{ type: "spring", damping: 13, bounce: 1, duration: 1 }}
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h1
												class="modal-title fs-5"
												id="DeckServiceModalLabel"
											>
												Deck & Fence Staining
											</h1>
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<p className="fs-5 lg paragraph">
												Transform your weathered wood
												deck into a stunning outdoor
												oasis with our comprehensive
												deck cleaning and staining
												services. At Dallas Powerwash
												Pros, we specialize in reviving
												and protecting wooden decks,
												ensuring they stand the test of
												time while maintaining their
												natural beauty. We pay
												meticulous attention to detail,
												ensuring every inch of your deck
												is rejuvenated. Once the deck is
												clean and dry, we expertly apply
												high-quality wood stains or
												sealants, carefully chosen to
												enhance the natural grain and
												color of your deck while
												providing superior protection
												against the elements. Our goal
												is to create a deck that not
												only looks stunning but also
												withstands the rigors of outdoor
												conditions for years to come.{" "}
											</p>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
												data-bs-dismiss="modal"
											>
												Close
											</button>
											<a
												class="btn btn-primary"
												href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation"
												target="blank"
											>
												Book Service
											</a>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
			<section id="about" className="bg-light p-4">
				<div className="container">
					<h1 className="justify-content-center">About Us</h1>
					<p className="paragraph fs-5">
					Welcome to Dallas Powerwash Pros! We are a leading pressure washing company dedicated to providing exceptional services to our valued clients in the Dallas area. We specialize in revitalizing and enhancing the appearance of residential and commercial properties. We understand the importance of maintaining a clean and well-maintained home at Dallas Powerwash Pros. Whether you need your home's siding cleaned, your driveway restored to its former glory, or your commercial building sparkling with cleanliness, we have the expertise and resources to get the job done right.	
					</p>
					<div className="row">
						<img src="./img/AboutLogo.png" className="h-100 col-12 col-md-6"></img>
						<div className="col-12 col-md-6">
							<h1>We Get Rid Of</h1>
							<ul className="row row-cols-auto row-cols-md-1 text-md-start justify-content-evenly">
								<il calssname="">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">Oil Stains</p>
								</il>
								<il calssname="col">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">Grafitee</p>
								</il>
								<il calssname="col">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">Rust</p>
								</il>
								<il calssname="col">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">Mold</p>
								</il>
								<il calssname="col">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">Algae</p>
								</il>
								<il calssname="col">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">Meldew</p>
								</il>
								<il calssname="col">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">General Dirt</p>
								</il>
								<il calssname="col">
									<i class="bi bi-droplet-fill text-primary d-inline ps-3 fs-2"></i>
									<p className="d-inline fs-2">And More</p>
								</il>
							</ul>
						</div>
					</div>
					{/* <p className="paragraph fs-5">
						What sets us apart from the competition is our unwavering commitment to customer satisfaction. We prioritize open communication and attention to your home. Our team works diligently to tailor our services to meet your specific requirements, ensuring that every project is completed to your utmost satisfaction. We combine our industry knowledge with cutting-edge techniques and eco-friendly cleaning solutions to deliver outstanding outcomes without compromising the environment.
					</p>
					<p className="paragraph fs-5">
						Our commitment to excellence and our passion for what we do have made us the trusted choice for countless residential and commercial clients throughout Dallas. We look forward to partnering with you to transform your property and exceed your expectations. Contact us today to discuss your project and receive a free estimate.
					</p> */}
				</div>
			</section>
			<section id="contact" className="bg-dark text-white">
				<div className="container p-4">
					<h1 className="justify-content-center p-3">Contact Us</h1>
					<div className="row row-cols-2 row-cols-xl-3 justify-content-center">
						<div className="col">
							<h2>Phone</h2>
							<p className="fs-4">972-946-5331</p>
							<a type="button" className="btn btn-primary btn-lg" href="tel:+19729465331">Call Us</a>
						</div>
						<div className="col">
							<h2>Email</h2>
							<p className="fs-4 text-break">info@dallaspowerwashpros.com</p>
							<a type="button" className="btn btn-primary btn-lg" href="mailto:info@dallaspowerwashpros.com">Email Us</a>
						</div>
						<div className="col">
							<h2>Hours</h2>
							<p className="fs-4">Mon-Fri: 8am-5pm</p>
							<a type="button" className="btn btn-primary btn-lg" href="https://calendly.com/dallaspowerwashpros/free-quote-evaluation">Schedule Now</a>
						</div>
					</div>
				</div>
			</section>
			<footer className="container-fluid bg-dark text-white">

			</footer>
		</div>
	);
}

export default App;
