'use client'
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Link from 'next/link';
import ServiceCard from '@/components/Shared/ServiceCard';



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
    const { serviceId } = props.params;
    console.log(serviceId);


    const [data, setData] = useState([]);
    const [relatedData, setRelatedData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        numberOfTickets: 1,
    });




    useEffect(() => {
        // Define the URL for your GET request
        const apiUrl = `https://think-best.vercel.app/api/posts/?id=${serviceId}`; // Replace with your API endpoint

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

    const userData = data?.[0];
    const findRate = userData?.rating;
    console.log('get rating', findRate)

    useEffect(() => {
        // Define the URL for your GET request
        const apiUrl = `https://think-best.vercel.app/api/posts/?rating=${findRate}`; // Replace with your API endpoint

        // Make a GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setRelatedData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [findRate]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission, e.g., submit the data to a server or perform further actions
            console.log('Form data submitted:', formData);
        };
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., submit the data to a server or perform further actions
        console.log('Form data submitted:', formData);
    };
    console.log('get related data', relatedData);
    return (

        <div>
            <div className="flex justify-center w-screen">
                <div className="w-full md:w-3/4 lg:w-2/3">
                    <h1 className="text-2xl font-bold mb-4 text-red-300">Featured Event</h1>
                    <h1 className="text-xl font-semibold mb-2">Event Title :{userData?.title}</h1>
                    <div className="relative h-96">
                        {/* Replace 'Image' with your image component */}
                        <Image src="https://i.ibb.co/jDPVwhX/book2.jpg"
                            width={500}
                            height={500}
                            alt="Event Image" className="w-full h-80  rounded-t-md " />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                T
                            </div>
                            <div>
                                <h1 className="ml-2">Event Time</h1>
                                <h1 className="ml-2">30 November 2023</h1>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                L
                            </div>
                            <div>
                                <h1 className="ml-2">Event Location</h1>

                                <h1 className="ml-2">{userData?.location}</h1>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                D
                            </div>
                            <div>
                                <h1 className="ml-2">Event Date</h1>
                                <h1 className="ml-2">30 November 2023</h1>
                            </div>
                        </div>

                    </div>
                    <h1 className="text-xl font-semibold mt-4">Pricing: {userData?.price}</h1>
                    <h1 className="text-xl font-semibold">Available Ticket :{userData?.ticket}</h1>
                    <h1 className="text-xl font-semibold mt-4">{userData?.about}</h1>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className=" mx-auto w-1/2 col-span-4  mt-8 p-4 bg-white shadow-md rounded-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="numberOfTickets" className="block text-gray-700 font-bold mb-2">Number of Tickets:</label>
                        <input
                            type="number"
                            id="numberOfTickets"
                            name="numberOfTickets"
                            value={formData.numberOfTickets}
                            onChange={handleInputChange}
                            min="1"
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                        Book Tickets
                    </button>
                </form>
                <h1 className="text-2xl font-bold text-center mb-4">Related Package</h1>


                <div className="flex  justify-center  items-baseline col-span-8">
                    {relatedData.slice(0, 3).map((item) => (
                        <ServiceCard key={item.id} product={item} />

                    ))}
                </div>
            </div>

        </div>











    );
};


export default DetailPage;




