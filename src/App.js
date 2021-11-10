import './App.css';
import Header from './components/Inicio/Header';
import Main from './components/Inicio/Main';

function App() {
  return (
    <div className={"home"}>
      <div className={"header"}>
        <Header />
      </div>
      <br/>
      <div className={"body"}>
        <Main />
      </div>
    </div>
  );
}

export default App;