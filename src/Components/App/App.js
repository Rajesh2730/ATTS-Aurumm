import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import LandingPage from './LandingPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;