import axios from "./config"

export const getBanner = () => axios.get('/banner')