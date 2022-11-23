import './App.css';
import MainButtons from './components/MainButtons';
import Formulario from './components/Formulario';
import EstadoDenuncias from './components/EstadoDenuncias';
import Buscador from './components/Buscador';
import DenunciasPorEmail from './components/DenunciasPorEmail';
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';

function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route element={< Dashboard />} path='/admin/dashboard' />
        <Route element={ < Admin /> } path='admin' />
        <Route element={ <MainButtons /> } path='/' />
        <Route element={ <DenunciasPorEmail /> } path='/denuncias' />
        <Route element={ <Buscador /> } path='/buscar' />
        <Route element={ <Formulario /> } path='/formulario' />
        <Route element={ <EstadoDenuncias /> } path='/estado' />
      </Routes>
    </div>
  );
}

export default App;
