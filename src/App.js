import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import History from "./Components/History";
import StopWatch from "./Components/StopWatch";

function App() {

	// root component
	return (
		<div className='app'>

			{/* used browser router for handling routes */}
			<Router>
				<Switch>
					<Route path='/history'>
						<History />
					</Route>
					<Route path='/'>
						<StopWatch />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
