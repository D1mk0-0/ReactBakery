//Импорт к каталогу с модулями из папки node-modules. В этом случае адрес не указывается до папки. 
import React from 'react';
//Импорты из сторонних файлов с JSX разметкой
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from './components/Footer/Footer';

import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Dialogs" element={<Dialogs/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
