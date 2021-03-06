import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);



 