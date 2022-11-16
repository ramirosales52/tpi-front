import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainButtons from './components/MainButtons';
import Formulario from './components/Formulario';
import EstadoDenuncias from './components/EstadoDenuncias';
import Buscador from './components/Buscador';
import DenunciasPorEmail from './components/DenunciasPorEmail';
import { Route, Routes } from 'react-router-dom'

function App() {
  return ( 
    <div className="App">
      <div className="body">
        <Header/>   
        <Routes>
          <Route element={ <MainButtons /> } path='/'/>
          <Route element={ <DenunciasPorEmail /> } path='/denuncias'/>
          <Route element={ <Buscador /> } path='/buscar'/>
          <Route element={ <Formulario /> } path='/formulario'/>
          <Route element={ <EstadoDenuncias /> } path='/estado'/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
