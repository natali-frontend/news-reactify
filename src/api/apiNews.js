import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page_number = 1, page_size = 2) => {
    try {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
            }
        })
        console.log('API response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
        return [];
    }
}