'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ServiceCard = ({ product}) => {
   //console.log(product._id)
 
    return (
        <Link href={`/service/${product._id}`} className='m-2'>
            <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md ">
                <Image src="https://i.ibb.co/jDPVwhX/book2.jpg" 
                    width={500}
                    height={500}
                alt="Event Image" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h2 className="font-semibold text-xl text-gray-800">{product.title}</h2>
                    <p className="text-gray-600">{product.location}</p>
                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">Ticket Price:</span>
                        <span className="font-semibold text-gray-800 text-xl">${product.price}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">Hosted by:</span>
                        <span className="font-semibold text-gray-800">{product.guest}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">Rating:</span>
                        <span className="font-semibold text-yellow-600 text-xl">{product.rating}</span>
                    </div>
                    <p className="text-gray-700 mt-4">{product.about}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard