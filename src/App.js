//Импорт к каталогу с модулями из папки node-modules. В этом случае адрес не указывается до папки. 
import React from 'react';
//Импорты из сторонних файлов с JSX разметкой
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
