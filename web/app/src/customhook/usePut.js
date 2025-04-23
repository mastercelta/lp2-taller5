import { useState } from "react";
import axios from "axios";

const usePut = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const putRequest = async (payload, options = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.put(url, payload, options);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, putRequest };
};

export default usePut;