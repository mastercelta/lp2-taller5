/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
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
            }
            catch (err) {
                setError(err)
                // console.log(err)
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [reload])
    return { data, loading, error }
}
export default useFetch