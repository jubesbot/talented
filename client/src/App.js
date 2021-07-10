import logo from './logo.svg';
import './App.css';
import Axios from './Util/Axios';

function App() {

  async function login(username, password){
      try{
        let {data} = await Axios.post(`http://localhost:8000/api/token/`, {username, password})
        localStorage.setItem("access", data.access)
        localStorage.setItem("refresh", data.refresh)
        console.log(data)
      }catch (e) {
        console.log(e.response)
      }
  }

  async function getTalents(username, password){
        try{
            let {data} = await Axios.get(`http://localhost:8000/talents/`)
            console.log(data)
        }catch (e) {
            console.log(e.response)
        }
    }















  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => login("admin", "admin")}>Login</button>
          <button onClick={() => getTalents()}>Get Talents</button>

          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

