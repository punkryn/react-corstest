import './App.css';
import axios from 'axios';

function App() {
  async function sendRequest() {
    const userResult = await axios('http://localhost:3001/users', {
      method: 'GET',
    });

    console.log(userResult.data);
  }

  return (
    <div className="App">
      <button onClick={sendRequest}>button</button>
    </div>
  );
}

export default App;
