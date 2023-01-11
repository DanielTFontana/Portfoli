import React, { Fragment } from "react";

const project_3 = () => {
    return (
        <Fragment>
            <div className="container mx-auto">
                <div className="p-10 container mx-auto flex justify-center">
                    <img className="w-7/12 rounded-md min-[500px]:w-full sm:w-full lg:w-full xl:w-8/12" src="../palpiteBox.png"></img>
                </div>
                <div className="container mx-auto grid justify-items-center gap-4 p-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">

                    <img className="min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500"
                    src="../palpiteBox_sugestions.png">
                    </img>
                    <img className="min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500"
                    src="../cupom_palpite.png">
                    </img>
                    <img className="min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500"
                    src="../planilha_palpite.png">
                    </img>
                    <img className="min-w-full rounded-md hover:scale-[1.3] cursor-crosshair ease-in duration-500"
                    src="../ativar_promo.png">
                    </img>
                    
                </div>
            </div>
        </Fragment>
    )
}
export default project_3