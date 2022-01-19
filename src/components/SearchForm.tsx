import { FormEvent } from "react";
import { useState } from "react";
import "./SearchForm.css";

interface SearchProp {
    onSubmit: (searchTerm:string)=> void
}

export const SearchForm = ({onSubmit}:SearchProp) => {
    const [ searchTerm, setSearchTerm ] = useState<string>("");

    function handleSearchSubmit(event:FormEvent) {
        event.preventDefault();

        onSubmit(searchTerm);
    }

    return (
        <div className="SearchForm" onSubmit={handleSearchSubmit}>
            <form className="searchForm">
                <label htmlFor="search">Search for a GIF</label>
                <div className="searchBar">
                <input type="text" name="search" onChange={(e)=>setSearchTerm(e.target.value)} />
                <button>Search</button>
                </div>
            </form>  
        </div>
    )
}