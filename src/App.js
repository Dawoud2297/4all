import './App.css';
import Home from './components/Home';
import Providers from './components/Providers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourprovider" element={<Providers />} />
        </Routes>
      </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
