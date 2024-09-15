import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import { Shop } from './Pages/Shop';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_men.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/Men' element={<ShopCategory banner={men_banner} category = "Men"/>}/>
        <Route path='/Women' element={<ShopCategory banner ={women_banner} category = "Women"/>}/>
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category = "Kids"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/productId' element={<Product/>}/>
        <Route path='/cart' element = { <Cart/>}/>
        <Route path='/LoginSignup' element = {<LoginSignup/>}></Route>
      </Routes>
    <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
