import React from 'react';
import Services from '../Services/Services';
import Agents from './Agents/Agents';
import Banner from './Banner/Banner';
import Clients from './Clients/Clients';
import Offer from './Offer/Offer';
import Partners from './Partners/Partners';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
            <Clients></Clients>
            <Agents></Agents>
            <Partners></Partners>
        </div>
    );
};

export default Home;