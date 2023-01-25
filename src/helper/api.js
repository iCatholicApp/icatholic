// https://scripture.api.bible/livedocs
import axios from "axios";

const API_KEY = "d9eed5d51ed9a38e8bddb22eb95fd65b";

const axiosClient = axios.create({
    baseURL: `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01`,
    headers: { "api-key": API_KEY },
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        console.log("error", error);
        return Promise.reject(error);
    }
);

export default axiosClient;
