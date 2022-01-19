import { Data } from "../models/Gif";
import "./Result.css";

interface GifProp {
    gif: Data,
}

export const Result = ({gif}:GifProp) => {
    return (

        <div className="Result">
            <h3>{gif.title}</h3>
            <div className="image"><img src={gif.images.fixed_height.url} alt="Gif" /></div>
            <p className="link"><a href={gif.url} target="_blank">Link to Giphy</a></p>
        </div>
    )
}