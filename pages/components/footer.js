import React from "react";

const Footer = () =>{
    return (
        <div className="bg-blue-300 container mx-auto min-w-full">
            <div className=" flex justify-evenly p-10">    
                <div>

                    <a href="https://github.com/DanielTFontana/">
                        <img className="w-14 h-14 border-2 border-black rounded-md hover:bg-black" src="github.png"></img>
                    </a>
                </div>
                <div className=""><img className="w-14 h-14 rounded-md" src="./react_symbol.png"></img></div>
                <div className=""><img className="w-14 h-14 rounded-md" src="./tailwindcss.png"></img></div>
            </div>
            
        </div>
    )
}
export default Footer