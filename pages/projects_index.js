import Link from "next/link";
import React, { Fragment } from "react";

const Projects = () => {
    return( 
    <Fragment>
        <div className="container mx-auto">

        <h1 className="font-sans font-semibold text-6xl text-center mt-20">
            Projects:
        </h1>

            <div className="p-6 container mx-auto">

                <div className="p-8 text-center drop-shadow-2xl container mx-auto">
                    <div className="container mx-auto flex justify-center">
                        <Link className="w-7/12 rounded-md min-[500px]:w-full sm:w-full lg:w-full xl:w-8/12
                        hover:border-2 border-blue-600 rounded-md" href='/projects/project_1'>
                            <img className=" rounded-md " src="./flex_grid_proj.png"/>
                        </Link>
                    </div>
                    
                        <p className="text-center text-2xl p-6 ">
                        The major challenge of this project was to work with grid and flex, producing a responsive webpage 
                        by adaptating the elements for each and every size of screens. 
                        To do so, i've used html, javascript and CSS..
                        </p>                    
                </div>

                <div className="p-8 container mx-auto drop-shadow-2xl mt-1">
                    <div className="container mx-auto flex justify-center">
                    <Link className="w-7/12 rounded-md min-[500px]:w-full sm:w-full lg:w-full xl:w-8/12
                    hover:border-2 border-blue-600 rounded-md" href='/projects/project_2'>
                        <img className=" rounded-md " src="./cadastro_upper2.png"/>
                    </Link>
                    </div>                        
                        <p className="text-center text-2xl p-6">
                        This project was the first test i've made for a company's intership. It was daring at the time, because 
                        i had some basic tasks to achieve and extra tasks to get a higher score. I've completed the basics, 
                        but at the extra i couldn't get very far. Nevertheless, it was a nice oportunity to learn and to understand, 
                        at the time, what i could improve at my work. 
                        Also, i've used html, javascript and CSS
                        </p>
                </div>

                <div className="p-8 drop-shadow-2xl mt-1 container mx-auto">
                    <div className="container mx-auto flex justify-center">
                    <Link className="w-7/12 rounded-md min-[500px]:w-full sm:w-full lg:w-full xl:w-8/12
                     shadow hover:border-2 border-blue-600 rounded-md" href='/projects/project_3'>
                        <img className=" rounded-md " src="palpiteBox_sugestions.png"/>
                    </Link>
                    </div>
                    <p className="text-center text-2xl p-6">
                    This was the most elaborated project. I've made it with a new programing course that im studing at the moment. 
                    The idea was to make a webpage for establishments with the function to ask it's clients what they think about the service and to get a 
                    discount coupon in return. The coupon was meant to be automatically generated and the client's datas were to be sent to an excel spreadsheet, 
                    showing the name, e-mail, whatsapp number, promotion and the date in which the questionary was filled and sent. 
                    To make this page i've used javascript, react, tailwind, nextJS.
                    </p>
                
                </div>

            </div>
        
        </div>
     </Fragment>)
}
export default Projects