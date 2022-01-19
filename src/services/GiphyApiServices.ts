import axios from "axios";
import { Data } from "../models/Gif";

const apiKey:string = process.env.REACT_APP_GIPHY_API_KEY || "";

export function fetchTrendingGiphy(): Promise<Data[]> {

    return axios.get("https://api.giphy.com/v1/gifs/trending", {  
    params: {
        api_key: apiKey
    }})
    
 .then(response => response.data.data);
 }

 export function fetchSearchGiphy(query:string): Promise<Data[]> {

    return axios.get("https://api.giphy.com/v1/gifs/search", {  
    params: {
        q: query,
        api_key: apiKey
    }})
    
 .then(response => response.data.data);
 }

