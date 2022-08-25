import React, {Fragment} from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';


import '../../App.css';


const Home = () => {
    return (
        <Fragment>
            <HeroSection />
            <Cards />
            <Footer />
        </Fragment>
    )
}

export default Home
