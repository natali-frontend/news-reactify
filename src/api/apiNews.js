import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest`, {
            params: {
                apiKey: API_KEY
            }
        })
        console.log('API response:', response.data.results);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
        return [];
    }
}