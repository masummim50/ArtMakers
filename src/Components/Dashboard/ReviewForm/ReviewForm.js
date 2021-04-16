import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';

const ReviewForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const handleReview = () => {
    const review = {review:  document.getElementById('reviewcontent').value, reviewBy: loggedInUser.displayName, reviewerImage: loggedInUser.photoURL, reviewerEmail: loggedInUser.email};
    console.log(loggedInUser)
    console.log(review)
    fetch('http://localhost:5000/addreview', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
  };
  return (
    <div className='n'>
      <div className="row">
        <div className="col-md-8">
          <h4>Share your experience</h4>
          <form>
            <textarea id='reviewcontent' className="w-75" placeholder="write your review" />
            <br/>
            <input type="button" onClick={handleReview} className='btn btn-success' value='Submit Review' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;