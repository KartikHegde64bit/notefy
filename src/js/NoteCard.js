import { useState, useRef } from "react";
import TextComp from "./TextComp";
function NoteCard(){
    const [noteTextData, setNoteTextData] = useState(null);
    let textCompRef = useRef(null);
    let saveFunction = function(){
        debugger
        const noteTextFromTextComp = textCompRef.returnTextContent();
        setNoteTextData(noteTextFromTextComp);
    }
    return (
        <div className="noteCardBaseClass" id="noteCardBaseId">
            <div>
                <TextComp ref={(textComp) => (textCompRef = textComp)}></TextComp>       
            </div>
            <button onClick={saveFunction}>Save</button>
        </div>
    );
} 
export default NoteCard;