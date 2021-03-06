import React, { useEffect, useState } from "react";
import Controllers from "./Controllers";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import "../App.css";
import { handlePressEvent } from "../api";

function StopWatch() {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;

		if (isActive && !isPaused) {
			// setinterval for running the timer
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	// function to start the timer
	const handleStart = () => {
		createHistory("start");
		setIsActive(true);
		setIsPaused(false);
	};

	// function to pause/resume the timer
	const handlePauseResume = () => {
		if (!isPaused) {
			createHistory("paused");
		} else {
			createHistory("resume");
		}
		setIsPaused(!isPaused);
	};

	// function to reset the timer
	const handleReset = () => {
		createHistory("reset");
		setIsActive(false);
		setTime(0);
	};

	// function to trigger the buttonPress event and send data to api
	const createHistory = (e) => {
		handlePressEvent({
			time:
				("0" + Math.floor((time / 60000) % 60)).slice(-2).toString() +
				" : " +
				("0" + Math.floor((time / 1000) % 60)).slice(-2).toString() +
				" : " +
				("0" + Math.floor((time / 10) % 100)).slice(-2).toString(),
			event: e,
		}).then((res) => {
			console.log(res);
		});
	};

	return (
		<div className='stopwatch'>
			<Timer time={time} />
			<Controllers
				active={isActive}
				isPaused={isPaused}
				handleStart={handleStart}
				handleReset={handleReset}
				handlePauseResume={handlePauseResume}
			/>
			<Link to='/history' className='digits' style={{ fontSize: "1rem", textDecoration: "none" }}>
				View History
			</Link>
		</div>
	);
}

export default StopWatch;
