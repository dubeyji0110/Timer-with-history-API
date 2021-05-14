import React from "react";
import "../App.css";

function Timer({ time }) {

	// component to render time
	return (
		<div className='timer'>
			<span className='digits'>
				{("0" + Math.floor((time / 60000) % 60)).slice(-2)} :&nbsp;
			</span>
			<span className='digits'>
				{("0" + Math.floor((time / 1000) % 60)).slice(-2)} :&nbsp;
			</span>
			<span className='digits ms'>
				{("0" + Math.floor((time / 10) % 100)).slice(-2)}
			</span>
		</div>
	);
}

export default Timer;
