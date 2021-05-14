import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getHistory } from "../api";
import "../App.css";

function History() {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		getHistory().then((res) => {
			// console.log(res);
			setData(res);
		});
	};

	return (
		<div className='body'>
			<div className='item'>
				<p>Time</p>
				<p>Event</p>
			</div>
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
