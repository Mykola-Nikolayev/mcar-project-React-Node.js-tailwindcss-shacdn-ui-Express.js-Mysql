// Chemin corrigé pour l'importation du logo Vite
import './App.css';
import { AppRoutes } from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>;
}

export default App;

