import React, { useEffect, useState } from "react";
import { getHistory } from "../api";
import { Link } from "react-router-dom";
import "../App.css";

function History() {
	const [data, setData] = useState([]);

	// calling getData func. everytime this component is rendered
	useEffect(() => {
		getData();
	}, []);

	// function to call api
	const getData = () => {
		getHistory().then((res) => {
			console.log(res);
			// setting the data received to an array
			setData(res);
		});
	};

	return (
		<div className='body'>
			<div className='item'>
				<p>Time</p>
				<p>Event</p>
			</div>

			{/* mapping over data returned from api call */}
			{data.length ? (
				data.map((d, i) => (
					<div className='item' key={i}>
						<p>{d.time}</p>
						<p className='special'>{d.event}</p>
					</div>
				))
			) : (
				<div className='item'>
					<p>Nothing to show</p>
				</div>
			)}
			<Link
				to='/'
				style={{
					fontSize: "1rem",
					textDecoration: "none",
					color: "#000",
					marginTop: "10px",
				}}>
				Go Back
			</Link>
		</div>
	);
}

export default History;
