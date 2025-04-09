import React, { useState } from "react";

const Home = () => {
	const [color,setColor] = useState("");
const bright = (color) => {
setColor(color);
};
	return (
		<div className="CajaSemaforo">
		<div className="Semaforo">
			<div className={`RedLight ${color === "red" ? "LightOn" : ""}`}
					onClick={() => bright("red")}>				
			</div>
			<div className={`GreenLight ${color === "green" ? "LightOn" : ""}`}
					onClick={() => bright("green")}>
			</div>
			<div className={`YellowLight ${color === "yellow" ? "LightOn" : ""}`}
					onClick={() => bright("yellow")}>
			</div>
		</div>
		</div>
	);
};

export default Home;