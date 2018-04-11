import './styles/common.css'
import './styles/app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import adjustToClient from './utils/head'
import registerServiceWorker from './registerServiceWorker'

adjustToClient()
ReactDOM.render((
        <HashRouter>
            <App />
        </HashRouter>
    ),
    document.getElementById('root')
)
registerServiceWorker();

