import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbarr from './Navbarr';
import HomeCom from './HomeCom';
import ClearBtnNav from './ClearBtnNav';
import './App.css';
import Footer from './Footer';

export default function Routess() {
    return (
        <div className="App">
            <div >
                <BrowserRouter>
                    <Navbarr /><br></br>
                    <Routes>
                        <Route path='/' element={<HomeCom />} />
                        <Route path='/clear' element={<ClearBtnNav />} />
                    </Routes><br></br>
                    <Footer/>
                </BrowserRouter>
            </div>
        </div>
    )
}
