'use client';
import ServiceCard from '@/components/Shared/ServiceCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Page = () => {
  
  const [data, setData] = useState([]);
  const cards =[]
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);

  console.log(typeof(searchTerm))

  useEffect(() => {
    // Define the URL for your GET request
    const apiUrl = 'http://localhost:3000/api/posts'; // Replace with your API endpoint

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        //console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  
  
  return (
    <div className="product-Page">
      <h1>Product Details</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-wrap justify-center items-baseline bg-slate-200'>

        {data.slice(0,5).map((item) => (
          <ServiceCard key={item.id} product={item} />
        ))}

      </div>
    </div>
  )
}

export default Page