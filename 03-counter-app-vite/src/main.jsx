import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp'

import './styles.css'
import { CounterApp } from './CounterApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title='Hola lales'/> */}
        <CounterApp value={100} />
    </React.StrictMode>
)

