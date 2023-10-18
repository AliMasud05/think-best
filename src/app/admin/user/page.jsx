'use client'
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleDeleteUser = (userId) => {
        const apiUrl = `https://think-best.vercel.app/api/auth/register?id=${userId}`;


        axios
            .delete(apiUrl)
            .then(() => {
                toast.success('Successfully delete!');
                setIsLoading(false);
                getUser();

            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };

    const getUser = () => {

        // Define the URL for your GET request
        const apiUrl = 'https://think-best.vercel.app/api/auth/register'; // Replace with your API endpoint

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

    }
    getUser();

    // console.log('users data', data)

    return (
        <div><div className="overflow-x-auto">
            <div>

            </div>
            <table className="table">


                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                {isLoading ? '<div>loading</div>' :
                    <tbody>
                        {
                            data.map(item => <>
                                <tr className="bg-base-200">
                                    <th>1</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <button className='bg-red-500 px-3 rounded font-bold py-2 text-base' onClick={() => handleDeleteUser(item._id)}>Delete</button>
                                </tr>
                            </>)
                        }

                    </tbody>
                }
            </table>
        </div></div>
    )
}

export default Page