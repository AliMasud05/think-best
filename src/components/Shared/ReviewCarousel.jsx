'use client';
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "./ReviewCard";



const ReviewCarousel = () => {
    const reviews = [
        {
            id: 1,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        {
            id: 3,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 4,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        {
            id: 1,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        {
            id: 3,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 4,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        {
            id: 1,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        {
            id: 3,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 4,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        {
            id: 1,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        {
            id: 3,
            author: "John Doe",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 4,
            author: "Jane Smith",
            review: "Pellentesque non elit quis augue pharetra suscipit.",
        },
        // Add more reviews as needed
    ];
    const reviewPairs = [];
    for (let i = 0; i < reviews.length; i += 3) {
        const pair = reviews.slice(i, i + 3);
        reviewPairs.push(pair);
    }
    return (
        <Carousel showArrows autoPlay infiniteLoop >
            {reviewPairs.map((pair, index) => (
                <div key={index}>
                    <div className="carousel-pair flex flex-col md:flex-row  justify-center items-center">
                        {pair.map((review) => (
                            <ReviewCard key={review.id} author={review.author} review={review.review} />
                        ))}
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default ReviewCarousel;