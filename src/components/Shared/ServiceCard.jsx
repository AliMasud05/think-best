'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';

const ServiceCard = ({ product}) => {
   //console.log(product._id)
 
    return (
        <Link href={`/service/${product._id}`} className='flex justify-around m-2'>
           

            <div className=" bg-slate-300 rounded-lg shadow-lg p">
                {/* Event Image */}
                <div className="relative">
                    <div className="absolute  font-serif h-8 bg-red-300">
                        <span className="">26</span>
                        <small className="">June</small>
                    </div>
                    <Image src="https://i.ibb.co/jDPVwhX/book2.jpg"
                        width={500}
                        height={500}
                        alt="Event Image" className="w-full h-48 object-cover rounded-t-md " />
                </div>

                {/* Event Content */}
                <div className='mt-2 p-2 '>
                    <div className="">
                        <h3 className="font-semibold">{product.title}</h3>
                        <span className="">Tickets from ${product.price}</span>
                        <p>Available Ticket :{product.ticket} </p>
                        <p>Rating :{product.rating} </p>
                        <p>Host :{product.guest} </p>
                    </div>
                    <div className="">
                        <ul>
                            <li className='flex'>
                                <span className="mr-1">
                                    <AiOutlineClockCircle size={20} color="red" />
                                </span>
                                Start 20:00pm - 22:00pm
                            </li>
                            <li className='flex'>
                                <span className="mr-1">
                                    <MdOutlineLocationOn size={24} color="red" />
                                </span>
                               {product.location}, Bangladesh
                            </li>

                        </ul>
                    </div>
                    <Link href=''> tickets &amp; details</Link>
                </div>
            </div>
        </Link>

    );
};

export default ServiceCard