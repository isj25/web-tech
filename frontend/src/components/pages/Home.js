import Hero from '../hero';
import React from 'react';
import Cards from '../cards.js';
import Footer from '../footer.js';
function Home(){
    return (
        <div>
            <Hero />
            <Cards />
            <Footer/>
        </div>
    );
}

export default Home;