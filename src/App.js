// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
// import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary-subtle mt-5 pb-1">
        <Index />
      </div>
    </>
  );
}

export default App;
