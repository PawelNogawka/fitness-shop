import React, {useState} from "react";
import { useCreate } from "../../../../hooks/useCreate";


import TextArea from "../../../../componets/ui/TextArea";
import Button from "../../../../componets/ui/Button";

import "./ReviewForm.scss";

const ReviewForm = ({user,productId}) => {
const [review, setReview] = useState('')

const {isLoading,addDocument} = useCreate()


  const handleSubmit = async (e) =>{
    e.preventDefault()

  await addDocument({
    _type: 'review',
    reviewValue: review,
    createdBy: {
      _type: 'reference',
      _ref: user[0]._id
    },
    product: {
      _type: 'reference',
      _ref: productId,
    }
  })

  }
  return (
    <section className="reviews-form">
      <h2 className="reviews-form__heading">leave a review</h2>
      <form onSubmit={handleSubmit} className="reviews-form__form">
        <TextArea onChange={(e) => setReview(e.target.value) } value={review} label="leave a review" placeholder="Enter review..." />
        <div className="reviews-form__btns">
          <Button submit text={isLoading ? "loading..." : "send"} />
          <Button onClick={() => setReview("")} outlined text="clear" />
        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
