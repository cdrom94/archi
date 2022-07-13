import React from 'react';
import './App.css';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PlacePage } from './pages/PlacePage';
import { HomePage } from './pages/HomePage';
import { architectureList } from './data';

const App = () => {
	const location = useLocation();
	return (
		<>
			<Link to='./'>
				<h1>archi.</h1>
			</Link>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<HomePage places={architectureList} />} />
					<Route path='/:url' element={<PlacePage />} key={location.pathname} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default App;
