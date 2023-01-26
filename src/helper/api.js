// https://scripture.api.bible/livedocs
import axios from "axios";

const API_KEY = "d9eed5d51ed9a38e8bddb22eb95fd65b";

const axiosClient = axios.create({
    baseURL: `https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01`,
    headers: { "api-key": API_KEY },
});

// response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
        return Promise.reject(error);
    }
);

export default axiosClient;
