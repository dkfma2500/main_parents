import React, { useState } from 'react';
import './TeacherReview.css';

const TeacherReview = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'John Smith', review: 'Great teacher, very patient.', rating: 5 },
        { id: 2, name: 'Jane Doe', review: 'Explains concepts clearly.', rating: 4 },
    ]);
    const [newReview, setNewReview] = useState({ name: '', review: '', rating: 0 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleReviewSubmit = () => {
        if (newReview.name && newReview.review && newReview.rating) {
            setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
            setNewReview({ name: '', review: '', rating: 0 });
            alert('Review submitted successfully!');
        } else {
            alert('Please fill out all fields before submitting.');
        }
    };

    return (
        <div className="teacher-review">
            <h2>선생님 리뷰</h2>
            <div className="review-form">
                <label>이름:
                    <input
                        type="text"
                        name="name"
                        value={newReview.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>리뷰:
                    <textarea
                        name="review"
                        value={newReview.review}
                        onChange={handleInputChange}
                    />
                </label>
                <label>별점:
                    <select
                        name="rating"
                        value={newReview.rating}
                        onChange={handleInputChange}
                    >
                        <option value="0">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <button onClick={handleReviewSubmit}>리뷰 제출</button>
            </div>
            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <h3>{review.name}</h3>
                        <p>리뷰: {review.review}</p>
                        <p>별점: {'⭐'.repeat(review.rating)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherReview;
