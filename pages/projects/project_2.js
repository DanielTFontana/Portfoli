import React, { Fragment } from "react";

const Project_2 = () =>{
    return (
        <Fragment>
            <div className="p-10 container mx-auto flex justify-center">
                <img className=" w-7/12 rounded-md min-[500px]:w-full sm:w-full lg:w-full xl:w-8/12" src="../log-in_inpeace_app_proj.png"></img>
            </div>
            
           
            <div className="container mx-auto grid justify-items-center gap-4 p-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <img className="min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500" src="../cadastro_upper2.png"></img>
                    <img className="min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500" src="../users_app_proj.png"></img>
                    <img className='min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500' src="../states_inpeaceapp.png"></img>
                    <img className='min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500' src="../senha_confirmApp.png"></img>                              
            </div>
            
            <p>

            </p>
        </Fragment>
    )
}
export default Project_2