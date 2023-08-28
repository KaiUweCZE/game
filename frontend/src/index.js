import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css'
import App from './App';

const container = document.getElementById('result')
const root = createRoot(container)
root.render(<App tab="home" />)
