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
							<a className="nav-link" href="#">
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
			<header className="App-header">
				<img
					src={logo}
					className="App-logo image img-fluid container-sm"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
