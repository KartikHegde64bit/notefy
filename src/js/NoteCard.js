import TextComp from "./TextComp";
function NoteCard(){
    let saveFunction = function(){

    }
    return (
        <div class="noteCardBaseClass" id="noteCardBaseId">
            <TextComp></TextComp>       
        <div>

        </div>
            <button onClick={saveFunction()}>Save</button>
        </div>
    );
} 
export default NoteCard;