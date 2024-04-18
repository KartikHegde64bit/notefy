//import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter.js';
function App() {
  const token = localStorage.getItem('notefy_token');
    return (
      <div>
        <h1>My App</h1>
        <AppRouter token={token} />
      </div>
    );
}

export default App;
