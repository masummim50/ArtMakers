import React, { useContext, useEffect } from 'react';
import { userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import ChooseUs from '../ChooseUs/ChooseUs';
import HeaderMain from '../HeaderMain/HeaderMain';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(userContext);
  
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;