import './App.css';
import { Header } from './components/Inicio/Header';
import Main from './components/Inicio/Main';

function App() {
  return (
    <>
      <Header/>
      <br/>
      <div className={"body"}>
        <Main />
      </div>
    </>
  );
}

export default App;