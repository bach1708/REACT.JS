// import logo from './logo.svg';
import './App.css';
import Func_JSX_NongVanBach from './components/Func_JSX_NongVanBach';
import Class_NongVanBach from './components/Class_NongVanBach';

function App() {
  return (
    <section className="App">
      <h1> Demo JSX</h1>
      {/* function component demo */}
      <Func_JSX_NongVanBach/>
      <Func_JSX_NongVanBach fullName=" Nong Van Bach" age ="22"/>

      <Class_NongVanBach/>
      <hr/>
      <Class_NongVanBach infor="Hoc ReactJS" time ="11" />
    </section>
  );
}

export default App;
