import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
import axios from "axios";
import "./App.css";
import { data } from "autoprefixer";
import Footer from "./components/Footer";

const App = () => {
    const [dataMovie, setMovie] = useState([]);
    const [searchMovie, setSearchMovie] = useState("Iron Man");

    async function axiosFunction(movieName, setMovie) {
        movieName = !movieName ? "Iron Man" : movieName;
        let cinemaData = await axios.get(
            `https://www.omdbapi.com/?s=${movieName}&apikey=9446507`
        );
        setMovie(cinemaData.data.Search);
    }

    useEffect(() => {
        axiosFunction(searchMovie, setMovie);
    }, [searchMovie]);

    return (
        <div>
            <Header />
            <Search
                setSearchMovie={setSearchMovie}
                setMovie={setMovie}
                dataMovie={dataMovie}
            />
            {dataMovie && dataMovie.length > 0 ? (
                <main
                  className="w-[90%] h-[78vh] gap-[20px] p-[20px] overflow-auto
                  mx-auto sm:w-[80%] grid grid-cols-1
                  lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 xl:grid-cols-3"
                >
                    {dataMovie.map((element) => (
                        <Main key={element.imdbID} moviesData={element} />
                    ))}
                </main>
            ) : (
                <p className="w-[100%] h-[100%] flex justify-center items-center text-[28px] text-[white] ">
                    Movie not found :(
                </p>
            )}
        </div>
    );
};

export default App;
