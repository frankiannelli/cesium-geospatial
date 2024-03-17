import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import { Entity } from './Pages/Entity';
import { CameraFlyTo } from './Pages/CameraFlyTo';
import './App.css';

function App() {
  return (
    <Router basename="/Geospatial">
      <div
        className="App"
        style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}
      >
        <Sidebar />
        <div>
          <header className="App-header">
            <h1>CesiumJS and React!</h1>
          </header>
          <main style={{ padding: '1em' }}>
            <Routes>
              <Route path="/entity" element={<Entity />} />
              <Route path="/camera-fly-to" element={<CameraFlyTo />} />
              <Route path="/" element={<Navigate to="/entity" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
