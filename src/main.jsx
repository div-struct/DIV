import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Components/Nav'
import Sec1 from './Components/Sec1'
import Sec2 from './Components/Sec2'
import Sec3 from './Components/Sec3'
import Sec4 from './Components/Sec4'
import Sec5 from './Components/Sec5'
import './index.css'
import './scss/nav.css'
import './scss/sec1.css'
import './scss/sec2.css'
import './scss/sec3.css'
import './scss/sec4.css'
import './scss/sec5.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Sec1 />
    <Sec2 />
    <Sec3 />
    <Sec4 />
    <Sec5 />
  </React.StrictMode>
)
