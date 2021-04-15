import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Services from '../../Home/Services/Services';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AllOrders from '../AllOrders/AllOrders';
import MyOrders from '../MyOrders/MyOrders';
import PaymentCard from '../PaymentCard/PaymentCard';
import ReviewForm from '../ReviewForm/ReviewForm';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
  let {path, url}= useRouteMatch()
  return (
    <div className='row'>
      <Sidebar></Sidebar>
        <div className="col-md-10 offset-md-2">
          <Switch>
            <Route exact path={path}>
              <h2>hello</h2>
            </Route>
            <Route path={`${path}/addservice`}>
              <AddService></AddService>
            </Route>
            <Route path={`${path}/services`}>
              <Services></Services>
            </Route>
            <Route path={`${path}/review`}>
              <ReviewForm></ReviewForm>
            </Route>
            <Route path={`${path}/addadmin`}>
              <AddAdmin></AddAdmin>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/allorders`}>
              <AllOrders></AllOrders>
            </Route>
            <Route path={`${path}/pay`}>
              <PaymentCard></PaymentCard>
            </Route>
          </Switch>
        </div>
    </div>
  );
};

export default Dashboard;