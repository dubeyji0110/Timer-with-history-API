import React from "react";
import "../App.css";

function Controllers({
	handleStart,
	handleReset,
	handlePauseResume,
	isPaused,
	active,
}) {
	const StartButton = (
		<div className='btn' onClick={handleStart}>
			Start
		</div>
	);

	const ActiveButton = (
		<div className='btn-grp'>
			<div className='btn' onClick={handleReset}>
				Reset
			</div>
			<div className='btn btn-one' onClick={handlePauseResume}>
				{isPaused ? "Resume" : "Pause"}
			</div>
		</div>
	);

	return (
		<div className='controller'>
			<div>{active ? ActiveButton : StartButton}</div>
		</div>
	);
}

export default Controllers;
