import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { FirstPage } from './Pages/FirstPages/FirstPage';
import { Home } from './Pages/Home';
import { MusicalCategory } from './Pages/MusicalCategory';
import { Shop } from './Pages/Shop';
import { Reviews } from './Pages/Reviews';
import { MyPage } from './Pages/MyPage';
import { Cart } from './Pages/Cart';
import { MDDetailPage } from './Pages/MDDetail';
import Footer from './Pages/FirstPages/components/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Detail from './Pages/Detail';

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
        <Route path="musical_detail/:id" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="md_detail/:id" element={<MDDetailPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
