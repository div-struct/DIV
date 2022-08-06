import Nav from './Nav'
import Footer from './Footer'
import Home from './Book/Home'
import Templates from './Book/Templates'


const App = () => {
    let Page
    console.log(window.location)
    switch(window.location.pathname) {
        case "/":
            Page = Home
            break
        case "/templates":
            Page = Templates
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
