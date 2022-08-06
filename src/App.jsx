import Nav from './Nav'
import Footer from './Footer'
import Home from './src/Book/Home'
import Templates from './src/Book/Templates'


const App = () => {
    let Page
    switch(window.location.pathname) {
        case '/':
            Page = Home
            break
        case '/templates':
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
