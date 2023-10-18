'use client'
import ServiceCard from '@/components/Shared/ServiceCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const apiUrl = 'https://think-best.vercel.app/api/posts';

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    if (newSortOption === sortOption) {
      // Toggle sorting direction if the same option is selected
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set default sorting direction for a new option
      setSortDirection('asc');
    }
    setSortOption(newSortOption);
  };

  const sortedData = [...data];

  if (sortOption === 'title') {
    sortedData.sort((a, b) =>
      sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
  } else if (sortOption === 'price') {
    sortedData.sort((a, b) =>
      sortDirection === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  const filteredData = sortedData.filter((item) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerSearchTerm) ||
      item.price.toString().includes(lowerSearchTerm)
    );
  });

  // Calculate the indexes for the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-Page mb-3">
      <div className='flex justify-center bg-slate-200 py-3'>
        <div>
          <input
            className='bg-slate-500 rounded py-2 mr-1'
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className='mr-2 py-2' value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
          <button className='bg-stone-400 py-2' onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}>
            {sortDirection === 'asc' ? ' Sort Descending' : 'Sort Ascending'}
          </button>
        </div>
      </div>
      <h1 className='text-center py-2 text-2xl'>Product</h1>

      <div>
        <div className="flex flex-wrap justify-center items-baseline w-screen bg-slate-200">
          {currentItems.map((item) => (
            <ServiceCard key={item.id} product={item} />
          ))}
        </div>
        <div className='flex justify-center'>
          <ul className="pagination flex">
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
              <li key={index}>

                <button
                  onClick={() => paginate(index + 1)}
                  className={`rounded-full py-2 px-4 mx-1 ${index + 1 === currentPage ? 'bg-blue-200 text-white' : 'bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Page;
