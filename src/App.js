import './App.css';
import Home from './components/Home';
import Providers from './components/Providers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
