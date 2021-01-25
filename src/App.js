import './App.css';
import Conversor from './components/conversor'

function App() {
  return (
    <div className="container">
      <div className="App">
          <div className = "header">
            <h1>Conversor de moedas</h1>
          </div>
          <div className= "linha">
            <Conversor moedaA = "USD" moedaB = "BRL"></Conversor>
            <Conversor moedaA = "BRL" moedaB = "USD"></Conversor>
        </div>
        <div className= "linha">
            <Conversor moedaA = "EUR" moedaB = "BRL"></Conversor>
            <Conversor moedaA = "BRL" moedaB = "EUR"></Conversor>
        </div>
        <div className= "linha">
            <Conversor moedaA = "ARS" moedaB = "BRL"></Conversor>
            <Conversor moedaA = "BRL" moedaB = "ARS"></Conversor>
        </div>

        <div className= "linha">
            <Conversor moedaA = "CAD" moedaB = "BRL"></Conversor>
            <Conversor moedaA = "BRL" moedaB = "CAD"></Conversor>
        </div>

        <div className= "linha">
            <Conversor moedaA = "GBP" moedaB = "BRL"></Conversor>
            <Conversor moedaA = "BRL" moedaB = "GBP"></Conversor>
        </div>

      
      </div>
      <div className="footer">
        Desenvolvido por Jonathan Alves
      </div>
    </div>
  );
}

export default App;
