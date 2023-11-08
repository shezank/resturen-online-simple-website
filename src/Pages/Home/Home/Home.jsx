import React from 'react';
import Sliders from '../Sliders/Sliders';
import Question from '../Questions/Question';
import TopFoods from '../TopFoods/TopFoods';
import OrderGuide from '../OrderGuide/OrderGuide';

const Home = () => {
    return (
        <div>
           <Sliders></Sliders> 
           <OrderGuide></OrderGuide>
           <TopFoods></TopFoods>
           <Question></Question>
        </div>
    );
};

export default Home;