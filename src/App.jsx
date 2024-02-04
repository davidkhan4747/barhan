import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Layout from './components/layout/layout';
import NotFound from './pages/not-found/not-found';
import DeliveryMenu from './pages/delivery-menu/delivery-menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactsPage from './pages/contacts/contacts';
import CategoryPage from './pages/category/ctegory-page';
function App() {
  AOS.init();

  return (
   <>
      <Routes>

          <Route path='/'  element={<Layout/>} >
              <Route path='/' element={<Home/>} />
              <Route path='/delivery' element={<DeliveryMenu/>}/>
              <Route path='/contacs' element={<ContactsPage/>} />
              <Route path='/category/:id' element={<CategoryPage/>} />
              {/* 404 */}
              <Route path='*' element={<NotFound/>} />

          </Route>
      </Routes>
   </>
  );
}

export default App;
