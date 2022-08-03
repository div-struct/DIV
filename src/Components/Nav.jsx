const Nav = () => {
    return (
        <header>
            <nav id="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="templates/index.html">Templates</a></li>
                    <li><a href="#temp">Our Works</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <img src="https://scontent.fceb1-3.fna.fbcdn.net/v/t1.15752-9/292565482_386867043590782_5713725227048561280_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pqd6YFoaowcAX80KMp7&_nc_ht=scontent.fceb1-3.fna&oh=03_AVK18DkctG33o3ZN5OPkVQZtYHR0Rlh-MWEjCwRIX25Wcw&oe=63050C24"/>
            </nav>
            <div id="bg">
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/290454386_796003804758840_2523768622890032752_n.png?stp=dst-png_s370x247&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=L8iuPcahMRIAX_gnWWZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKZn0_ZVrYhZv9rAg3w3MAEB29S5FDbKl5RA6dd2YU5Vw&oe=6304640A" class="bg"/>
            </div>
            <div id="img1">
                <img src="https://drive.google.com/uc?id=1HQqF_HODKg-dPZB2DXqnwDU1B_g02hAR"/>
            </div>
            <div id="img2">
                <img src="https://drive.google.com/uc?id=1NCdRoP6qyXyI6ubb-nGWBaBucs2id5cp"/>
                <div id="intro">
                    <h1><span className="active">Create</span> your ideal</h1>
                    <h1><span className="active">website</span> with us!</h1>
                </div>
            </div>
        </header>
    )
}

export default Nav;