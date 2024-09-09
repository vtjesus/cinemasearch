import React from "react";
import "./Main.css";
const Main = ({ moviesData }) => {
    return (
        <section
            key={moviesData.imdbID}
            className="flex flex-col items-center justify-between p-[10px] rounded-[10px] border-[2px] border-[gold] "
        >
            <img className="min-w-[100%]" src={`${moviesData.Poster}`} alt="" />
            <span className="text-[#fff] text-[18px] mt-[20px]">
                {moviesData.Title}
            </span>
            <div className="flex flex-col items-center w-[100%]">
                <div className="flex justify-around mt-[15px] w-[100%] items-center">
                    <span className="text-[#beab3e]">{moviesData.Type}</span>
                    <span className="text-[#fff]">{moviesData.Year}</span>
                </div>
                <div className="flex justify-around items-center w-[100%] text-[white] mt-[10px] mb-[10px]">
                    <span className="text-[gold] cursor-pointer">
                        <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <span className="cursor-pointer">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Main;
