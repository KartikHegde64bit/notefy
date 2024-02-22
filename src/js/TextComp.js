import { useState } from "react";
function TextComp(props, ref){
    let [innerData, setInnerTextData] = useState(props.textData  || ""),
        placeholder = props.placeholder? props.placeholder: "Enter your Notes Here";
    const updateInnerTextData = function(event){
        let value = event.target? event.target.value: null;
        if(value || value === ""){
            setInnerTextData(value);
        }
    };
    const returnTextContent = function() {
        return this.innerData;
    }
    return(
        <textarea 
            type="text" 
            id="textInputField" 
            style={{height: "350px", width: "500px", textAlign: "left", resize: 'none'}}
            value={innerData} 
            placeholder={placeholder}
            onChange={updateInnerTextData}>
        </textarea>
    );
}
export default TextComp;