import React from "react";
import Navigation from "./nav";

const Header = () =>{
    return (

        <div className="bg-blue-300 min-w-full container mx-auto">
            <div className="p-6">
                <p className=" font-sans font-semibold text-6xl text-center">Portfolio</p>
                <div className="flex justify-center items-center">
                   <Navigation></Navigation>
                </div>
            </div>
        </div>
        
    )
}
export default Header