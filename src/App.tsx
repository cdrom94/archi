import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PlacePage } from './pages/PlacePage';
import { HomePage } from './pages/HomePage';
import { architectureList } from './data';

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<AnimatePresence initial={true} exitBeforeEnter>
				<Link to='./' key='link'>
					<h1>archi.</h1>
				</Link>
				<Routes key='routes'>
					<Route path='/' element={<HomePage places={architectureList} />} />
					<Route path='/:url' element={<PlacePage />} />
				</Routes>
			</AnimatePresence>
		</Router>
	);
};

export default App;
