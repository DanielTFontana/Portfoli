import React, { Fragment } from "react";

const about = () => {
    return (
        <div className="container mx-auto text-center min-w-full">
            <div className="flex justify-center">
            <img src="./me.png" className="w-72 p-6 rounded-full"></img>
            </div>
            <h1 className="font-bold text-6xl p-4">Hello!</h1>
            <div className="flex justify-center text-center mb-8">            
            <p className="w-3/5 text-3xl">
            This is my first react project. 
            I've made it as a training after some studies, 
            therefore i use it to introduce myself. 
            If you are a programer i know it seems like a simpleton project, but we have to start little to reach higher objectives. 
            By today, i'm happy to be able to do this page and to say hello; by tomorrow, maybe we'll construct a more interesting page together. 
            I hope you enjoy it!
            </p>
            </div>
        </div>
    )
}
export default about