import React from 'react'
import { useSanity } from '../../../../hooks/useSanity'

import Review from './Review'


import './Reviews.scss'

const Reviews = ({productId}) => {
  const { data, isLoading, error } = useSanity(`*[_type == 'review' && product->_id == '${productId}'] {
    _id,
    _createdAt,
    reviewValue,
    createdBy -> {
      _id,
      name,
      email,
      avatar
    }
  }`);
  

  if (isLoading) return ;
  if (error) return

  if (data.length == 0) return;

  return (
    <section className='all-reviews'>
        <h2 className="all-reviews__heading">all reviews</h2>
        <div className="all-reviews__container">
              {data.map(review =>(
                <Review key={review._id} review={review} />
              ))}
        </div>
    </section>
  )
}

export default Reviews
