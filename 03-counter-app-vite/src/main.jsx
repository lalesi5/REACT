import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirtsApp} from './FirtsApp'

import './styles.css'
import { CounterApp } from './CounterApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={50}/>
    </React.StrictMode>
)

