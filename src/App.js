import './App.css';
import Index from './components/Index';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* <Button /> */}
      <div className="container-fluid bg-primary-subtle mt-5 pb-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
