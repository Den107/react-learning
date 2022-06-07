import './App.css';
import Message from "./Message";

function App() {
    const mess = 'Hello'
  return (
    <div className="App">
      <Message mess={mess}/>
    </div>
  );
}

export default App;
