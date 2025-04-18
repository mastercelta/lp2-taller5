import { useState } from 'react';
import axios from 'axios';

const usePost = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const post = async (postData, options = {}) => {
        setLoading(true);
        setError(null); // Reset error before making a new request
        try {
            const response = await axios.post(url, postData, options);
            setData(response.data);
        } catch (error) {
            console.error('Error during POST request:', error);
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, post };
};

export default usePost;