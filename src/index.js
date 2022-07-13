import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

ReactDOM.render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
