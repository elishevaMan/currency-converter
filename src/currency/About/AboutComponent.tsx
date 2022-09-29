
import React, { useEffect, useState } from "react";
import { HISTORY_STORE } from "../../BL/consts/stores";
import rootStores from "../../BL/store";
import { IConverter } from "../Convereter/ConverterComponent";

import './AboutComponent.scss'
import AboutRowComponent from "./AboutRow/AboutRowComponent";

import aminCurrency from "../../assets/coin_thumbs__up.svg";





const historyStore = rootStores[HISTORY_STORE];



const AboutComponent: React.FC = () => {

  
  const {
    getHistoryResults
  } = historyStore;


    const[historyData,setHistoryData]=useState<IConverter[]>(getHistoryResults());

    return(
        <div style={{paddingBottom:"10%"}}>
                <h4 className="title-converter history-title">History Currency Converter</h4>

      <div className="currency-history-img-row">
      <img className="currency-history-img" src={aminCurrency} alt="loading..." />
      <img className="currency-history-img" src={aminCurrency} alt="loading..." />
      <img  className="currency-history-img" src={aminCurrency} alt="loading..." />
      </div>

        {historyData!.map((history)=>(
        <AboutRowComponent converterHistory={history}/>
      ))}
        </div>
    
    );
}
export default AboutComponent