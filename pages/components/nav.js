import React from "react";

const Navigation = () => {
  
    const Menus = [
        
            {name: "Home", link: "/", icon: <img className=" w-10" src="./home.png"/>},
            {name: "Contact", link: "/contact", icon: <img img className=" w-10" src="./contact.png"/>},
            {name: "Projects", link: "/projects_index", icon: <img className=" w-10" src="./monitor.png"/> ,},    
            {name: "About", link:"/about", icon: <img img className=" w-10" src="./user.png"/>}
        
    ]

    return (
        <div className="container mx-auto flex justify-center w-1/4"> 
            <ul className="flex space-x-8 p-2">
                {
                    Menus.map((Menu) =>
                    <li key={Menu.name}>
                        <a href={Menu.link}>{Menu.name}{Menu.icon} </a>
                        
                    </li>)
                }
            </ul>
        </div>
    )
}
export default Navigation