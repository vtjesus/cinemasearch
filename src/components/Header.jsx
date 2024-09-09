import React from "react";

const Header = () => {
    return (
        <header className="w-[80%] mx-[auto] mt-[10px] flex gap-[30%] items-center justify-between">
            <h1 className="text-[38px] text-[gold] select-none">Cinema</h1>
            <ul className="flex gap-[10px] mr-[30px]">
                <li className="text-[gold] text-[30px] cursor-pointer"><ion-icon name="videocam-outline"></ion-icon></li>
            </ul>
        </header>
    );
};

export default Header;
