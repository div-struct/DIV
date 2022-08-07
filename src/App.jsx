import Nav from './Nav'
import Footer from './Footer'
import Home from './Book/Home'
import Templates from './Book/Templates'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/templates" element={<Templates />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;