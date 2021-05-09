import axios from 'axios'


const apiRequest = () => {
    let axiosReqToken;
    return (query) => {
        const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s='${query.trim()}'`;
        if (axiosReqToken) {
            console.log("cancelling request")
            console.log(axiosReqToken)
            axiosReqToken.cancel();
        }
        axiosReqToken = axios.CancelToken.source();
        return axios.get(url, { cancelToken: axiosReqToken.token }).then(
            (response) => {
                return response.data.Search
            }).catch((error) => {
                if (axios.isCancel(error)) {
                    // Handle if request was cancelled
                    console.log('Request canceled', error.message);
                } else {
                    // Handle usual errors
                    console.log('Something went wrong: ', error.message)
                }
                return []
            })
    }

}

export const search = apiRequest()