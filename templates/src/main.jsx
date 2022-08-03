import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Sec1 from './Components/Sec1'
import Sec2 from './Components/Sec2'
import Sec3 from './Components/Sec3'
import './index.css'
import './scss/Navbar.css'
import './scss/sec1.css'
import './scss/sec2.css'
import './scss/sec3.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Sec1 />
    <Sec2 />
    <Sec3 />
  </React.StrictMode>
)
