import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<div>
				<Jumbotron />	
			</div>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Home;