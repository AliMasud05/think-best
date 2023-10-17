import Link from 'next/link';
import React from 'react'

const Page = () => {
    const user = {
        username: 'exampleUser',
        name: 'John Doe',
        email: 'john@example.com',
        // Add more user details
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">Username: {user.username}</p>
                <p className="text-gray-600">Email: {user.email}</p>
                {/* Add more user details */}
            </div>
            <Link href='/userdashboard/editprofile'>
                <button  >Edit Profile</button>
            </Link>
            <div>
            </div>
        </div>
    );
}

export default Page