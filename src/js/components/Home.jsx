import React, { useState } from "react";

const Home = () => {
	const [color,setColor] = useState("");
	const [showPurple, setShowPurple] = useState(true);

const bright = (color) => {
setColor(color);
};
const togglePurple = () => {
	setShowPurple(!showPurple);
	if (color === "purple") {
		setColor("");
	}
};

	return (
		<div>
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
			{showPurple && (
					<div
						className={`PurpleLight ${color === "purple" ? "LightOn" : ""}`}
						onClick={() => bright("purple")}
					></div>
				)}
		</div>		
		</div>
		<button onClick={togglePurple} style={{ marginTop: "20px" }}>
		{showPurple ? "Ocultar Luz Púrpura" : "Mostrar Luz Púrpura"}
	</button>
	</div>
	);
};

export default Home;