import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/api';
import { ReviewsList } from './ReviewsList/ReviewsList';
import { Message } from 'components/Shared/Message.styled';
import { Loader } from 'components/Loader/Loader';

const MovieReviews = () => {
  const { movieID } = useParams();
  const [reviewsData, setReviewsData] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    getReviews(movieID)
      .then(result => {
        setReviewsData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  if (status === 'pending') return <Loader />;
  if (status === 'rejected')
    return <Message>Ooops, something went wrong</Message>;
  if (status === 'resolved' && reviewsData.length === 0)
    return <Message>There is no reviews for that movie</Message>;
  if (status === 'resolved') return <ReviewsList reviewsData={reviewsData} />;
};

export default MovieReviews;
