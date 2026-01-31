import React from 'react';
import Hero from '../components/Hero';
import Doctors from '../components/Doctors ';
import { useLoaderData } from 'react-router';
import Service from '../components/Service';

const Home = () => {
    
    return (
        <div>
            <Hero></Hero>
            <Doctors></Doctors>
            <Service></Service>
        </div>
    );
};

export default Home;