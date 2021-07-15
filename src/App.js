import './App.css';
import Chelsea from './image/Chelsea_FC.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Azis Rizkil</h1>
        <h2>Kelompok Amazon</h2>
        <img src={Chelsea} className="App-logo" alt="Chelsea"/>
          <h5>Chelsea Football Club /ˈtʃɛlsiː/ adalah sebuah klub sepak bola Inggris yang bermarkas di Fulham,
             London. Chelsea didirikan pada tahun 1905 dan kini berkompetisi di Liga Utama Inggris.</h5> 
        <a href ="https://www.instagram.com/azisrizkil__/"> My Instagram</a>
      </header>
    </div>
  );
}

export default App;
