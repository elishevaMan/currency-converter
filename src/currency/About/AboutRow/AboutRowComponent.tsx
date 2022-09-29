
import { IConverter } from "../../Convereter/ConverterComponent";





interface Iprops{
      converterHistory:IConverter 

}

    const AboutRowComponent:React.FC<Iprops> = ({converterHistory}) => {

    return(
        <div >
           <div className="second-row"> 
           
              {converterHistory.amount }  {converterHistory.from}  = {converterHistory.result }  {converterHistory.to }
          </div>
        </div>
    
    );
}
export default AboutRowComponent