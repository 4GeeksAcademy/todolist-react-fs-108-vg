import React, { useState, useEffect } from "react";

const Home = () => {
	const [showPurple, setShowPurple] = useState(true);
	const [autoCycle, setAutoCycle] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(-1); // -1 = ningún color encendido

	const bright = (color) => {
		const colors = showPurple ? ["red", "green", "yellow", "purple"] : ["red", "green", "yellow"];
		const index = colors.indexOf(color);
		setCurrentIndex(index);
	};

	const togglePurple = () => {
		setShowPurple(!showPurple);
		if (getCurrentColor() === "purple") {
			setCurrentIndex(-1);
		}
	};

	const getCurrentColor = () => {
		const colors = showPurple ? ["red", "green", "yellow", "purple"] : ["red", "green", "yellow"];
		return currentIndex >= 0 ? colors[currentIndex] : "";
	};

	useEffect(() => {
		let interval = null;
		const colors = showPurple ? ["red", "green", "yellow", "purple"] : ["red", "green", "yellow"];

		if (autoCycle) {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [autoCycle, showPurple]);

	const toggleCycle = () => {
		setAutoCycle(!autoCycle);
		setCurrentIndex(0); // comenzar el ciclo desde el principio
	};

	const currentColor = getCurrentColor();

	return (
		<div>
			<div className="CajaSemaforo">
				<div className="Semaforo">
					<div
						className={`RedLight ${currentColor === "red" ? "LightOn" : ""}`}
						onClick={() => bright("red")}
					></div>
					<div
						className={`GreenLight ${currentColor === "green" ? "LightOn" : ""}`}
						onClick={() => bright("green")}
					></div>
					<div
						className={`YellowLight ${currentColor === "yellow" ? "LightOn" : ""}`}
						onClick={() => bright("yellow")}
					></div>
					{showPurple && (
						<div
							className={`PurpleLight ${currentColor === "purple" ? "LightOn" : ""}`}
							onClick={() => bright("purple")}
						></div>
					)}
				</div>
			</div>

			<div style={{ marginTop: "20px" }}>
				<button onClick={togglePurple} className="btn btn-secondary me-2">
					{showPurple ? "Ocultar Luz morada" : "Mostrar Luz morada"}
				</button>
				<button onClick={toggleCycle} className="btn btn-secondary me-2">
					{autoCycle ? "Automático OFF" : "Automático ON"}
				</button>
			</div>
		</div>
	);
};

export default Home;