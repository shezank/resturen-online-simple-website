import React from 'react';
import Sliders from '../Sliders/Sliders';
import Question from '../Questions/Question';
import TopFoods from '../TopFoods/TopFoods';
import OrderGuide from '../OrderGuide/OrderGuide';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home: Kasmeri Food</title>
                </Helmet>
                <Sliders></Sliders>
                <OrderGuide></OrderGuide>
                <TopFoods></TopFoods>
                <Question></Question>
            </div>

        </HelmetProvider>

    );
};

export default Home;