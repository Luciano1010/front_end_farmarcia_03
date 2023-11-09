
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormularioCategorias from './components/categorias/formularioCategorias/FormularioCategorias';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';

function App() {
  return (
    <>
   <ToastContainer />
    <BrowserRouter>
    <Navbar />
      <div className='min-h-[80vh] '>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categorias" element={<ListaCategorias />} />
      <Route path="/cadastroCategorias" element={<FormularioCategorias />} />
      <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
      <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
      
     
      </Routes>
      </div>
     
      <Footer />

      
    </BrowserRouter>
      
    </>
  );
}

export default App;
