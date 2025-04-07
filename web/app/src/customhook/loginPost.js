// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router";


function useLogin(url) {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const login = async (data) => {
        setLoading(true)
        setError(null)
        try {
            const resp = await axios.post(url, data);
            setData(resp.data)
            navigate("/blog");

            let { token } = resp.data["access_token"];
            localStorage.setItem('token', JSON.stringify(token))
        }
        catch (err) {
            // console.log({ error: err })
            setError(err)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }

    }
    return { loading, error, data, login }
}
export default useLogin