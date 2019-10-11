import React, {Fragment} from 'react';
import logo from './logo.svg';
import './styles/styles.scss';
import Curso from './Curso';

//const App = () => <h1>Hola mundo desde mi archivo app.js</h1>
const App = () => (
  //SOlo puede enviars eun div 
  <Fragment>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="imagencita" src="https://i.pinimg.com/originals/76/f2/3e/76f23ef08dc1ebabf4589ca0daa1fc14.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso de mi empresa</p>
        <p> Tu futuro te espera</p>
        <a href="http://www.google.com" className="button">Inscribete ya</a>
      </div>
    </div>
    </div>
  </div>
<div className="ed-grid m-grid-3">
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
</div>

 </Fragment> 
  

)
/*
function App() {
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
*/
export default App;
