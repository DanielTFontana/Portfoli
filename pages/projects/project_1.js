import React, { Fragment } from "react";

const Project_1 = () =>{
    const clickZoom = () =>{
        onclick
    }
    return (
        <Fragment>
            <div className="p-10 container mx-auto flex justify-center">
                <img className="w-7/12 rounded-md min-[500px]:w-full sm:w-full lg:w-full xl:w-8/12 " src="../flex_grid_proj.png"></img>
            </div>
            
           
            <div className="container mx-auto grid justify-items-center gap-4 p-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <img className="w-96 h-96 rounded-md hover:scale-[1.25] cursor-crosshair ease-in duration-500" src="../responsive_1_oneBit.png"></img>
                    <img className="w-96 h-96 rounded-md hover:scale-[1.25] cursor-crosshair ease-in duration-500" src="../responsive_2_oneBit.png"></img>
                    <img className='w-96 h-96 rounded-md hover:scale-[1.25] cursor-crosshair ease-in duration-500' src="../responsive_3_oneBit.png"></img>                              
            </div>
            
            <p>

            </p>
        </Fragment>
    )
}
export default Project_1