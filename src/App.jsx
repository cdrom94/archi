import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Places from "./components/Places";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Route
				render={({ location }) => (
					<AnimatePresence initial={true} exitBeforeEnter>
						<Link to="./">
							<h1>archi.</h1>
						</Link>
						<Switch location={location} key={location.pathname}>
							<Route path="/" component={NavBar} exact />
							<Route path="/:id" component={Places} />
							<Route component={Error} />
						</Switch>
					</AnimatePresence>
				)}
			></Route>
		</Router>
	);
};

export default App;
