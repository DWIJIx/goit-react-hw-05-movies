import { getReviewsById } from 'services/fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item } from './Reviews.Styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsById(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <h3>We don't have any reviews for this movie!</h3>
      ) : (
        <List>
          {reviews.map(review => (
            <Item key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
export default Reviews;
