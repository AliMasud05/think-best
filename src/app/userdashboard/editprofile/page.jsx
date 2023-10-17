'use client'
import React, { useState } from 'react'

const Page = () => {
    const [formData, setFormData] = useState({
        username: 'exampleUser',
        name: 'John Doe',
        email: 'john@example.com',
        // Add more user details
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Send an API request to update the user's profile with the formData
        // Example: axios.put('/api/update-profile', formData)
        // Redirect the user to their updated profile Page
        // Example: router.push('/user-profile');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-600">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Contact Number</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    {/* Add more user details input fields */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Save Profile
                    </button>
                </div>
            </form>
        </div>
    );
}


export default Page