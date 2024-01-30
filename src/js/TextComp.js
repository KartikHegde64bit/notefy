import { useState } from "react";
function TextComp(props){
    let [innerData, setInnerTextData] = useState(props.textData || "Enter your Notes Here");
    const updateInnerTextData = function(event){
        let value = event.target? event.target.value: null;
        if(value || value === ""){
            setInnerTextData(value);
        }
    };
    return(
        <textarea 
            type="text" 
            id="textInputField" 
            style={{height: "350px", width: "500px", textAlign: "left", resize: 'none'}}
            value={innerData} 
            onChange={updateInnerTextData}>
        </textarea>
    );
}
export default TextComp;