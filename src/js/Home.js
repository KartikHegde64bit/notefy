
import NoteCard from './NoteCard.js';
function Home() {

    return (
        <div className="App">
            <div style={{width: "100%"}}>
                {/* Left section */} 
                <div style={{width: "50%", height: "100px", float:"left"}}>
                    Left Section
                </div>
            
                {/* Mid section */}
                <div className="verticalLine"></div>

                {/* Right section */}
                <div className="rightSectionBase">
                    <NoteCard>
                    </NoteCard>
                </div>
            </div>
        </div>
    );
}

export default Home;