import { Data } from "../models/Gif";
import { Result } from "./Result";
import "./ResultsList.css";

export interface Props {
    gifs: Data[]
}

export const ResultsList = ({gifs}:Props) => {
    return (
        
        <div className="resultContainer">
        <h1>Results</h1>

        <div className="resultsList">     
            {gifs.map((gif, i) => <Result key={i} gif={gif} />)}
        </div>
        
        </div>
);
}
