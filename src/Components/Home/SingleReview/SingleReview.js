import React from 'react';

const SingleReview = ({singlereview}) => {
  return (
    <div className="col-md-3">
      <div className="shadow p-3">
        
      <div className="d-flex flex-column align-items-center">
        <img src={singlereview.reviewerImage} style={{borderRadius:'50%', height:'50px', width:'50px'}} alt=""/>
        <h6>{singlereview.reviewBy}</h6>
      </div>
      <p>{singlereview.review.slice(0,100)}...</p>
      </div>
    </div>
  );
};

export default SingleReview;