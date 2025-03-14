import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import Connexion from './pages/connexion';



function App() {
  return (
    <>
      <Banner />
      <main className="container-fluid px-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
        </Routes>
      </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;