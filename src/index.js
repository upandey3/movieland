import React from 'react';
import { createRoot } from 'react-dom';


import App from './App.js'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)

