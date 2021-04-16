import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <div className="bg-dark mt-5">
    <div className='container'>
      <h2 className="text-center text-white p-4">Customer Reviews</h2>
      <div className="row">
      {
        reviews.map(singlereview => <SingleReview singlereview={singlereview}></SingleReview>)
      }
      </div>
    </div></div>
  );
};

export default Reviews;