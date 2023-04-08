import './App.css';
import Index from './components/Index';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      {/* <Button /> */}
      <div className="container-fluid bg-primary-subtle mt-5 pb-1">

        <Index />

      </div>
    </>
  );
}

export default App;
