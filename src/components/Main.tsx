import { fetchSearchGiphy, fetchTrendingGiphy } from "../services/GiphyApiServices"
import { useState, useEffect } from "react";
import { Data } from "../models/Gif";
import { ResultsList } from "./ResultsList";
import { SearchForm } from "./SearchForm";
import "./Main.css";

export interface MainProp {
    gif: Data[],
    setGif: () => void
}

export const Main = () => {

    const [ gifs, setGifs ] = useState<Data[]>([]);
    const [ searchTerm, setSearchTerm ] = useState<string>("");

        useEffect( ()=> {
            if (searchTerm) {
                fetchSearchGiphy(searchTerm).then(
                    response => setGifs(response)
                )}
                    else {
                        fetchTrendingGiphy().then(
                        gif => setGifs(gif)
                    )}
        },[searchTerm]) 

    function handleFormSubmit(searchTerm:string) {
        setSearchTerm(searchTerm)
    }

    return (
        <div className="Main">
            <SearchForm onSubmit={handleFormSubmit}/>
            <ResultsList gifs={gifs} />
        </div>
    )}