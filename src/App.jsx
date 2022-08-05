import Nav from './Nav'
import Footer from './Footer'
import Home from './Book/Home'



const App = () => {
    let Page
    switch(window.location.pathname) {
        case "/":
            Page = Home
            break
    }

    return (
        <>
        <Nav />
        <Page />
        <Footer />
        </>
    )
}

export default App;
