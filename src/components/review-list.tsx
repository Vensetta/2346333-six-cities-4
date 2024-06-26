import { Reviews } from '../types/review';
import { formatRating } from '../util';

type ReviewListProps = {
  reviews: Reviews;
};

export function ReviewList({ reviews }: ReviewListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt={review.user.name} />
            </div>
            <span className="reviews__user-name">
              {review.user.name}
            </span>
            {review.user.isPro && <span className="offer__user-status">Pro</span>}
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: formatRating(review.rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime={review.date.slice(0,10)}>{new Date(review.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}
