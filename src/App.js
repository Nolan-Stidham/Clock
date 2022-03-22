import React, { useEffect, useState } from "react";
import SandClockSVG from "./sandClock.svg";
import "./App.css";

const FPS = 2;

function App() {
	const [display, setDisplay] = useState(new Date().toTimeString());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDisplay(new Date().toTimeString());
		}, 1000 / FPS);

		// make sure to clear the timer on component teardown
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={SandClockSVG} className="App-logo" alt="sand clock" />
				<p>{display}</p>
			</header>
		</div>
	);
}

export default App;
