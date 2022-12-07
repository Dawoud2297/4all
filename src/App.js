import './App.css';
import Home from './components/Home';
import Providers from './components/Providers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const providers = ['1b7e914efdf9b9f9a3f3a052bb89d222',
    '72a3a6e68c6fd5a7fd1461386d4cf17b',
    'fcfdc07ee9f7d2c8a613ee66c7b700cf']
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home providers={providers} />} />
          <Route path="/:id" element={<Providers providers={providers} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
