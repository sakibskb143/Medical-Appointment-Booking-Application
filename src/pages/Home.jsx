import React from 'react';
import Hero from '../components/Hero';
import Doctors from '../components/Doctors ';
import { useLoaderData } from 'react-router';

const Home = () => {
    
    return (
        <div>
            <Hero></Hero>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;