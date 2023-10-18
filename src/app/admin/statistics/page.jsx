'use client'
import { Button, Col, Row, Statistic } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';



const page = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        // Define the URL for your GET request
        const apiUrl = `https://think-best.vercel.app/api/posts`; // Replace with your API endpoint

        // Make a GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    useEffect(() => {
        // Define the URL for your GET request
        const apiUrl = `https://think-best.vercel.app/api/auth/register`; // Replace with your API endpoint

        // Make a GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Active Users" value={users.length} />
            </Col>
            <Col span={12}>
                <Statistic title="Total Data (CNY)" value={posts.length} precision={2} />
                <Button
                    style={{
                        marginTop: 16,
                    }}
                    type="primary"
                >
                    Recharge
                </Button>
            </Col>
            <Col span={12}>
                <Statistic title="Active Users" value={112893} loading />
            </Col>
        </Row>
    )
}

export default page