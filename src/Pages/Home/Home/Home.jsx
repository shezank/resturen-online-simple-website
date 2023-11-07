import React from 'react';
import Sliders from '../Sliders/Sliders';
import Question from '../Questions/Question';
import TopFoods from '../TopFoods/TopFoods';

const Home = () => {
    return (
        <div>
           <Sliders></Sliders> 
           <TopFoods></TopFoods>
           <Question></Question>
        </div>
    );
};

export default Home;