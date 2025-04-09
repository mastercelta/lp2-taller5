import React, { useState } from 'react'
import axios from 'axios'

const usePost = (url, postData) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const post = async () => {
        setLoading(true)
        try {
            const response = await axios.post(url, postData)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
        finally { 
            setLoading(false)
        }
    }

    return { data, error, loading, post }

}
export default usePost