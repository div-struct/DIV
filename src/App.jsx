import Nav from './Nav'
import Footer from './Footer'
import Home from './Book/Home'
import Templates from './Book/Templates'
import Sample3 from './Book/Sample3'
import Sample4 from './Book/Sample4'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'



const App = () => {

    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/templates" element={<Templates />}></Route>
                <Route path="/sample3" element={<Sample3 />}></Route>
                <Route path="/sample4" element={<Sample4 />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;