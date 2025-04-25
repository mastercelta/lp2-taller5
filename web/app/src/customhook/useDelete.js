import { useState } from "react";
import axios from "axios";

const useDelete = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteData = async (id, options = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.delete(`${url}/${id}`, options);
            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { deleteData, loading, error };
};

export default useDelete;