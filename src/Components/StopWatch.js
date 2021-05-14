import React, { useEffect, useState } from "react";
import Controllers from "./Controllers";
import Timer from "./Timer";
import "../App.css";

function StopWatch() {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
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

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
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
		</div>
	);
}

export default StopWatch;
