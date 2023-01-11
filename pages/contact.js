import React, { Fragment } from "react";

const Contact = () => {
    return (
        <Fragment>
            <div className="container mx-auto p-10">
                <div className="p-10">
                    <img className="w-20 h-20  rounded-md" src="./whatsapp-icon.png"></img>
                    <label className="">+55(27)999449441</label>
                </div>

                <div className="p-10">
                    <img className="w-20 h-20 rounded-md" src="./email.png"></img>
                    <label>daniel.dtf@icloud.com</label>
                </div>

                <div className="p-10">
                    <a href="https://www.linkedin.com/in/daniel-t%C3%B3tola-fontana-879364235/">
                        <img className="w-20 h-20 rounded-md hover:border" src="./linkedin.png"></img>
                    </a>
                    <label>https://www.linkedin.com/in/daniel-t%C3%B3tola-fontana-879364235/</label>
                </div>
            </div>
        </Fragment>
    )
}
export default Contact