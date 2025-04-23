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
            setData(resp.data);

            let token = resp.data.access_token;
            let user = resp.data.user;
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))
            window.location.href = "/blog/page/1";

        }
        catch (err) {
            // console.log(err.response.data.detail)
            setError(err.response.data.detail)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }

    }
    return { loading, error, data, login }
}
export default useLogin