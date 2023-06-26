import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="col align-self-start">
					<img
						src={logo}
						className=" float-start"
						height="50"
						alt="logo"
					/>
				</div>
				<div className="col text-center d-none d-md-block">
					<ul className="navbar-nav justify-content-center">
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
				<div className="col d-flex flex-row justify-content-end">
					<p className="text-white my-auto m-2">(972)946-5331</p>
					<div className="p-2">
						<button className="btn btn-outline-success">CALL</button>
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
