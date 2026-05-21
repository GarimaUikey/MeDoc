import axios from "axios";

const axiosInstance = axios.create({

  baseURL: "https://medoc-1-4f1f.onrender.com/api"

});

export default axiosInstance;
