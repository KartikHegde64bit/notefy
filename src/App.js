//import logo from './logo.svg';
import './App.css';
import NoteCard from './js/NoteCard.js';

function App() {
  return (
    <div className="App">
        <div style={{width: "100%"}}>
            <div style={{width: "50%", height: "100px", float:"left"}}>
                Left Section
            </div>
            <div style={{width: "50%", height: "100px", float: "right"}}>
                <NoteCard>
                </NoteCard>
            </div>
        </div>
    </div>
  );
}

export default App;
