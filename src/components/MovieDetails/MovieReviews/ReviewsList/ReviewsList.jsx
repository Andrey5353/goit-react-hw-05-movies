import PropTypes from 'prop-types';
import {
  Author,
  Paragraph,
  ReviewList,
  ReviewItem,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviewsData }) => (
  <ReviewList>
    {reviewsData.map(({ id, author, content }) => (
      <ReviewItem key={id}>
        <Author>{`Author: ${author}`}</Author>
        <Paragraph>{content}</Paragraph>
      </ReviewItem>
    ))}
  </ReviewList>
);

ReviewsList.propTypes = {
  reviewsData: PropTypes.array.isRequired,
};
