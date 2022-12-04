import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainButtons from './components/MainButtons';
import Formulario from './components/Formulario';
import EstadoDenuncias from './components/EstadoDenuncias';
import Buscador from './components/Buscador';
import DenunciasPorEmail from './components/DenunciasPorEmail';
import Admin from './components/Admin';
import Inicio from './components/pages/Inicio'
import Administrar from './components/pages/Administrar'
import Informes from './components/pages/Informes'
import Denuncias from './components/pages/Denuncias'

function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route element={ <Inicio /> } path='/admin/dashboard/inicio' />
        <Route element={ <Administrar /> } path='/admin/dashboard/administrar' />
        <Route element={ <Informes /> } path='/admin/dashboard/informes' />
        <Route element={ <Denuncias /> } path='/admin/dashboard/denuncias' />
        <Route element={ <Admin /> } path='admin' />
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
