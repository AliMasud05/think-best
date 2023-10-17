'use client'
import ServiceCard from '@/components/Shared/ServiceCard';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DetailPage = (props) => {
    const content = {
        title: 'Sample Title',
        description: 'Sample description goes here.',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        pricing: '$99.99',
        availability: 'In stock',
        location: '123 Main Street, City',
        contact: 'contact@example.com',
        rating: { rate: 4.5, count: 200 },
        relatedContent: ['Related Item 1', 'Related Item 2', 'Related Item 3'],
        bookingOptions: ['Option 1', 'Option 2', 'Option 3'],
    };
   const {serviceId}= props.params;
   console.log(serviceId);


    const [data, setData] = useState([]);

 

    useEffect(() => {
        // Define the URL for your GET request
        const apiUrl = `http://localhost:3000/api/posts/?id=${serviceId}`; // Replace with your API endpoint

        // Make a GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        }, [serviceId]);
        console.log(data?.[0])
    return (
        <div className="product-page">
            <h1>Product Details</h1>
            <div className='flex flex-wrap justify-center items-baseline bg-slate-200'>

                {data.slice(0, 5).map((item) => (
                    <>
                        <div className="container mx-auto p-4 mb-10">
                            <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
                            <p className="text-gray-600 mb-4">{data.description}</p>
                            <div className="flex flex-wrap">

                                <Image

                                    src={data.image}
                                    alt='dash'
                                    width={500}
                                    height={500}

                                    className="w-1/2 md:w-1/3 lg:w-1/4 p-2"
                                />

                            </div>
                            <p className="text-xl font-bold text-indigo-600 mt-4">Pricing: {data.pricing}</p>
                            <p className="text-lg text-green-600">Availability: {data.availability}</p>
                            <p className="text-gray-600">Location: {data.location}</p>
                            <p className="text-gray-600">Contact Information: {data.contact}</p>
                            <p className="text-gray-600">
                                Rating: {data.rating}
                            </p>
                            <h2 className="text-xl font-semibold mt-4">Related Content/Services:</h2>

                            <h2 className="text-xl font-semibold mt-4">Booking Options:</h2>
                            <ul className="text-gray-600 ml-4">

                            </ul>
                        </div>
                    </>
                ))}

            </div>
        </div>
    );
};

export default DetailPage;
