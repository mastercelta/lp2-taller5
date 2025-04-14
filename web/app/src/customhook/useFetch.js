import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const useFetch = (url, options = {}, reload = false) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setError(null)
            try {
                const resp = await axios.get(url, { ...options })
                setData(resp.data)
                // console.log(resp.data)
            }
            catch (err) {
                setError(err)
                console.log(err)
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload])
    return { data, loading, error }
}
export default useFetch