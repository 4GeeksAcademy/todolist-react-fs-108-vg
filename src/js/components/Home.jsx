import React, { useState } from "react";

//include images into your bundle
 
//create your first component
const Home = () => {
	const [color,setColor] = useState("");
const bright = (color) => {
console.log(color);
};
	return (
		<div className="CajaSemaforo">
		<div className="Semaforo">
			<div className="RedLight" onClick={() => bright("red")}>
				
			</div>
			<div className="GreenLight" onClick={() => bright("green")}>
			</div>
			<div className="YellowLight" onClick={() => bright("yellow")}>
			</div>
		</div>
		</div>
	);
};

export default Home;