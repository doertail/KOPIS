import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { FirstPage } from './Pages/FirstPages/FirstPage';
import { Home } from './Pages/Home';
import { MusicalCategory } from './Pages/MusicalCategory';
import { Shop } from './Pages/Shop';
import Footer from './Pages/FirstPages/components/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const location = useLocation();
  const isFirstPage = location.pathname === '/';
  return (
    <div>
      {!isFirstPage && <Header />}
      {!isFirstPage && <Navbar />}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/musicals" element={<MusicalCategory />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
