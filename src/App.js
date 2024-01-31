//import logo from './logo.svg';
import './App.css';
import NoteCard from './js/NoteCard.js';

function App() {
  return (
    <div className="App">
        <div style={{width: "100%"}}>
            {/* Left section */} 
            <div style={{width: "50%", height: "100px", float:"left"}}>
                Left Section
            </div>
        
            {/* Mid section */}
            <div class="verticalLine"></div>

            {/* Right section */}
            <div class="rightSectionBase">
                <NoteCard>
                </NoteCard>
            </div>
        </div>
    </div>
  );
}

export default App;
