import './styles/common.css'
import './styles/app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Footer from './shared/Footer'
import adjustToClient from './utils/head'
import registerServiceWorker from './registerServiceWorker'

adjustToClient()
ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Footer />, document.getElementById('footer'))
registerServiceWorker();

