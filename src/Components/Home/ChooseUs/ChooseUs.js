import React from 'react';
import team from '../../../images/team.jpg';
import delivery from '../../../images/delivery.jpg';
import revision from '../../../images/revision.jpg';

const ChooseUs = () => {
  return (
    <div className="bg-dark">
    <div className="container">
      <div className="text-center">
        <h3 className="brand-text text-center p-4">Why Choose Us</h3>
      </div>
      <div className="row">
        
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow bg-light rounded">
            
          <div className="image-container p-2 border" style={{height:'250px'}}>
            <img src={team} alt="" className="h-100 w-100"/>
          </div>
          <div className="info">
            <h3>A Team of Artist <br/> Ready to work</h3>
          </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow bg-light rounded">
              
            <div className="image-container p-2 border" style={{height:'250px'}}>
              <img src={delivery} alt="" className="h-100 w-100"/>
            </div>
            <h3>Fast delivery & <br/> Live Updates</h3>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow bg-light rounded">
            
          <div className="image-container p-2 border" style={{height:'250px'}}>
            <img src={revision} alt="" className="h-100 w-100"/>
          </div>
          <h3>Revisions with no extra charge</h3>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default ChooseUs;