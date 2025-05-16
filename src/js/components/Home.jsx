import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";

const Home = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<div className="Container">
				<Jumbotron />
			<div className="row">
				<Card />
				<Card />	
				<Card />
				<Card />	
			</div>
			</div>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Home;