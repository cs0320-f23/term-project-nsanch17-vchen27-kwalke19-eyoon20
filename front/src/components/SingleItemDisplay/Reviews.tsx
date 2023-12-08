import React from 'react';
import "../../style/SingleItemDisplay.css"


const Reviews = () => {
  // This data would ideally come from props, context, or a state management store
  const reviews = [
    {
      id: 1,
      author: "Alex Iwobi",
      date: "2 March 2021 at 06:30 pm",
      content: "Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.",
      rating: 5
    },
    // Add more reviews as needed
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews ({reviews.length})</h2>
      {reviews.map(review => (
        <div key={review.id} className="review">
          <div className="review-author">{review.author}</div>
          <div className="review-date">{review.date}</div>
          <div className="review-content">{review.content}</div>
          {/* Implement star rating based on review.rating */}
        </div>
      ))}
    </div>
  );
};

export default Reviews;