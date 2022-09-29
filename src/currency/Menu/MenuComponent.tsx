
import React, { useState } from "react";
import { set } from "react-hook-form";
import {  useHistory } from "react-router-dom";


import '../../bootstrap.css'
import './MenuComponent.scss'







const MenuComponent: React.FC = () => {

    const history = useHistory();
    const moveBetweenPage = (name: string) => {
        if(currentPage!==name)
        {
        history.push(`/${name}`);
        setCurrentPage(name)
        }
      };


    const[currentPage,setCurrentPage]=useState("");
    


    return(
    
        <div className="menu-line">
            <div className="tabs">
            <span className="pointer" 
           onClick={() => moveBetweenPage("currency")}> 
           Currency Converter</span>
            <span className="pointer"  onClick={() => moveBetweenPage("about")}> About</span>
            </div>
        </div>
    );
}
export default MenuComponent


