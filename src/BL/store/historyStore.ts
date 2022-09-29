import { action,  IObservableArray,  makeAutoObservable,  observable } from "mobx";
import { IConverter } from "../../currency/Convereter/ConverterComponent";
import ApiConverter from "../Api/ApiConverter";

class historyStore {


    
    private _types: IObservableArray<string> = observable([]);
    get types()
    {
        return this._types
    }

    setTypes =(data: string[])=>{
        this._types.replace(data)
    }

    constructor() {
        makeAutoObservable(this)
    }

   
    
  

    
    geCurrencyTypesList= async (): Promise<void>  => {
      const typesList= await ApiConverter.currencyList();
      this.setTypes(typesList)
       
    };

    
    getHistoryResults = (): IConverter[]  => {

  
      let arr :IConverter[]= [];
       const previousConverters = localStorage.getItem("previous_converters");

          if (previousConverters) {
           const previousConvertersArr= previousConverters?.split("#");
           console.log(previousConvertersArr)

           previousConvertersArr?.forEach(
               (data:string)=>arr.push(JSON.parse(data) as IConverter));
          }
          return arr;
    };

   
    AddResultsToHistory = (Converter: IConverter) => {

       let arr= [];
        const previousConverters = localStorage.getItem("previous_converters");
  
        if(!previousConverters)
        {
            localStorage.setItem("previous_converters",  JSON.stringify(Converter));
        }
        else
         localStorage.setItem("previous_converters", previousConverters+"#"+ JSON.stringify(Converter));
       
    }
 }
 export default historyStore;
