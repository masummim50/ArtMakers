import React, { useContext, useEffect } from 'react';
import { userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import ChooseUs from '../ChooseUs/ChooseUs';
import HeaderMain from '../HeaderMain/HeaderMain';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer'
import Examples from '../Examples/Examples';

const Home = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(userContext);
  
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <Examples></Examples>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;