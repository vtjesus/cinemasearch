import React from "react";

const Search = ({ setSearchMovie, setMovie, dataMovie }) => {
    return (
        <>
            <form
                className="flex w-[80%] mx-[auto] my-[10px] items-center"
            >
                <input
                    className="w-[100%] bg-[#1c1b1b] px-[10px] py-[10px] text-[14px] text-[white] rounded-[10px] outline-none border-b-[2px] border-b-[#222] "
                    type="search"
                    placeholder="Enter movie name"
                    required
                    onChange={(e) => setSearchMovie(e.target.value)}
                />
                <button
                    className="px-[10px] py-[10px] rounded-[10px] bg-[black] text-[gold] text-[14px] active:opacity-[0.8]"
                    type="submit"
                    // onClick={(e) => setMovie(dataMovie)}
                    onClick={(e) => {
                        e.preventDefault();
                        setMovie(dataMovie);
                    }}
                >
                    SEARCH
                </button>
            </form>
        </>
    );
};

export default Search;
