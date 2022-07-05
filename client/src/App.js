import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart';
import Mobiles from './components/SoloItems/Phones/Mobiles';
import Products from './components/Items/Products';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Watches from './components/SoloItems/Watches/Watches';
import Toys from './components/SoloItems/Toys/Toys';
import Earphones from './components/SoloItems/Earphones/Earphones';
import Laptop from './components/SoloItems/Laptop/Laptop';
import Cloths from './components/SoloItems/Cloths/Cloths';
import ContactPage from './pages/ContactUs/ContactPage';
import AdminThings from './pages/AdminThings/AdminThings';
import UpdateProducts from './components/updateProducts/UpdateProducts';
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound/NotFound';

function App() {
  const userData = useSelector(state => state.userInfo.userInfo)
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/' element={<Products />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/update/:id' element={<UpdateProducts />} />
        {userData.isAdmin ?
          <Route path='/admin' element={<AdminThings />} />
          :
          <Route path='/admin' element={<NotFound />} />
        }

        {/* Each solo component */}
        <Route path='/home/Mobiles' element={<Mobiles />} />
        <Route path='/products/Mobiles' element={<Mobiles />} />

        <Route path='/home/Watches' element={<Watches />} />
        <Route path='/products/Watches' element={<Watches />} />

        <Route path='/home/Toys' element={<Toys />} />
        <Route path='/products/Toys' element={<Toys />} />

        <Route path='/home/Earphones' element={<Earphones />} />
        <Route path='/products/Earphones' element={<Earphones />} />

        <Route path='/home/Laptops' element={<Laptop />} />
        <Route path='/products/Laptops' element={<Laptop />} />

        <Route path='/home/Branded%20Clothing' element={<Cloths />} />
        <Route path='/products/Branded%20Clothing' element={<Cloths />} />

      </Routes>
    </div>
  );
}

export default App;
