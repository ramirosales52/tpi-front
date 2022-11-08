import './App.css';
import { Route, Switch} from 'wouter'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainButtons from './components/MainButtons';
import Formulario from './components/Formulario';
import EstadoDenuncias from './components/EstadoDenuncias';


function App() {
  return ( 
    <div className="App">
      <div className="body">
        <Header/>   
        <Switch>
          <Route component={ MainButtons } path='/'/>
          <Route component={ Formulario } path='/formulario'/>
          <Route component={ EstadoDenuncias } path='/estado'/>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
