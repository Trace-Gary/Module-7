import { useEffect, useReducer } from "react";

export function useDataReducer(url) {
    const [data, dispatch] = useReducer(reducer, {loading: true, data: {}, error:''})

    useEffect(() => {
        if (url) {
            let ignore = false
            dispatch({ type: 'FETCH_LOADING'})

            fetch(url).then(response => response.json())
            .then(json => {
                if (!ignore) {
                    dispatch( {type: 'FETCH_SUCCESS', payload: json})
                }
            })
            .catch(error => dispatch({ type: 'FETCH_ERROR', payload: error.message}))

            return () => {
                ignore = true
                dispatch({ type: 'FETCH_CANCELLED'})
            }
        }
    },[url])

return data

}

function reducer (postsResult, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: '' }
        case 'FETCH_ERROR':
            return { loading: false, data: [], error: action.payload } 
        case 'FETCH_CANCELLED':
            return { loading: false, data: [], error: action.payload } 
        case 'FETCH_LOADING':
            return { loading: true, data: [], error: action.payload } 


        default:  return { ...postsResult, loading: false }
}
} 