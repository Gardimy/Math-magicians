import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import Calculator from './components/Calculator';
import QuoteComponent from './components/Quote';
import Navbar from './Navba';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<QuoteComponent />} />
      </Routes>
    </>
  );
}

export default App;
