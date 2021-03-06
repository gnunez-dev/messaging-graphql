import logo from './logo.svg';
import './App.css';
import {useQuery} from 'urql';

const QUERY = `
  query{
    allPets{
      name
      weight
      category
      inCareOf{
        name
      }
    }
  }
`;

function App() {
  const [result, reExecuteQuery] = useQuery({query: QUERY});
  console.log({result, reExecuteQuery});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
