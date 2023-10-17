"use client";
import React from 'react';

const ReviewCard = ({ author, review }) => {
    return (
        <div className="review-card">
            <p className="review-text">{review}</p>
            <p className="author">- {author}</p>
        </div>
    );
};

export default ReviewCard;