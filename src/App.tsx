import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Posts from './pages/Posts';
import Photos from './pages/Photos';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {!isHomePage && <Header />}
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </main>
      
      {!isHomePage && <Footer />}
    </div>
  );
};

export default App;
