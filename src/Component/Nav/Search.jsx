import React, { useContext } from "react";
import { Store } from "../../Context/Sbkamalikek"

const Search = () => {
    const {search,setSearch}=useContext(Store)
    return (
        <div className="flex justify-between ">
            <div className="mt-5">
                <input
                value={search}
                    type="text"
                    placeholder="Search movies..."
                    className="w-72 px-4 py-2 rounded-lg  border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2"
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </div>
        </div>

    );
};

export default Search;
