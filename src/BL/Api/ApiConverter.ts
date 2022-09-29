import axios from "axios";
import { IConverter } from "../../currency/Convereter/ConverterComponent";


class ApiConverter  {
    

    // API_KEY ="MMurgaDOCIFLCBuWYTq2iYE7M9tdVIrq";
    API_KEY ="3FXMJpnfd76dfXkE1PhnLpOmfpCrTiIr";

    API_CONVERTER_CURRENCY="https://api.apilayer.com/exchangerates_data/"
     
    currencyList=  async (): Promise<string[]> => {
        let currenciesType : string[]=[];
        try {
       
            const res = await axios.get(
                this.API_CONVERTER_CURRENCY+"symbols",
              {headers:{'apikey': this.API_KEY}}
              )
            
           if(res.data.success)
            currenciesType =   Object.keys(res.data.symbols);
            
            return currenciesType;
          } catch (err) {
            alert("ארעה שגיאה בשליפת סוגי המטבעות")
            throw err;
          }
        }

   

    currencyConverter = async (convertData: IConverter): Promise<any> => {

    try {
      let converterResult :String ="";
        const res = await axios.get(
            this.API_CONVERTER_CURRENCY+"convert?to="+convertData.to+"&from="+convertData.from+"&amount="+convertData.amount,
          {headers:{'apikey': this.API_KEY}}
          )
         

          if(res.data.success)
          {
             
          let  converterResult= res.data.result;
          
          return converterResult;
      } 
    }
      catch (err) {
        alert("ארעה שגיאה בהמרת המטבעות")
        throw err;
      }
    }
}

export default new ApiConverter();
