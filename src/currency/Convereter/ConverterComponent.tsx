import React, { useState } from "react";
import { useEffect } from "react";
import ApiConverter from "../../BL/Api/ApiConverter";
import { HISTORY_STORE } from "../../BL/consts/stores";
import rootStores from "../../BL/store";

import "../../bootstrap.css";
import "./ConverterComponent.scss";
import aminCurrency from "../../assets/coin_thumbs__up.svg";
import { observe } from "mobx";
import { observer } from "mobx-react";


export interface IConverter {
  from: string;
  to: string;
  amount: string;
  result?: any;
}


const historyStore = rootStores[HISTORY_STORE];

const ConverterComponent: React.FC = observer(() => {
  const { AddResultsToHistory,  types} = historyStore;
  const [converter, setconverter] = useState<IConverter>({from:"", to:"", amount:""});
  const [showResult, setshowResult] = useState<number>(0);


 

 
  const Converter = async (converter1 :IConverter) => {
    setshowResult(1);
    let result= await ApiConverter.currencyConverter(converter1);
    let data = converter;
    data.result=result;
    setshowResult(2);
   AddResultsToHistory(data);
  };

  const handleChange = (e: any) => {
    let data = converter;
    data.amount=e.target.value;

    setconverter({...converter,amount:e.target.value})
    if (converter.amount&& converter.from && converter.to) {
      Converter(data);
    }
    setconverter(data)

  };
 
  const handleSelect = (e: any, name: string) => {
    let data = converter;
    if (name === "from") {
      data.from=e.target.value;
    } else {
     data.to=e.target.value;
     if (converter.amount&& converter.from && converter.to) {
      Converter(data);
     }
      
    }
    setconverter(data)

   

  
  };
  return (
    <div className="container-converter">

      <h4 className="title-converter">Currency Converter</h4>
      <div className="first-row">
        <input className="amount-input" type="number" required onChange={(e) => handleChange(e)} />
      <label style={{alignSelf:"flex-end"}}>From:</label> 
        <select
          className="form-control form-1 currency-type-input"
          id="fromCurrency"
          onChange={(e) => handleSelect(e, "from")}
        >
          <option value=""></option>
          {types.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
        <label style={{alignSelf:"flex-end"}}>To:</label> 

        <select
          className="form-control form-1 currency-type-input"
          id="toCurrency"
          onChange={(e) => handleSelect(e, "to")}
        >
          <option value=""></option>
          {types.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>

<div style={showResult===2? {display:"inline"}: {display:"none"}}> 
      <div className="currency_img">
      <img src={aminCurrency} alt="loading..." />
      </div>
      <div className="second-row">
        <label> {converter.amount} </label>
        <label> {converter.from} </label>
        <label> = </label>
        <label>{converter.result} </label>
        <label> {converter.to} </label>
      </div>
      </div>
        <h4  style={showResult===1? {display:"inline"}: {display:"none"}} className="title-converter"> convert please wait....</h4>
    </div>
  );
});
export default ConverterComponent;
