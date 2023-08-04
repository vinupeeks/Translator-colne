import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbarr from './Navbarr';
import HomeCom from './HomeCom';
// import ClearBtnNav from './ClearBtnNav';

export default function Routess() {
    return (
        <div>
            <div>
                <BrowserRouter>
                    <Navbarr />
                    <Routes>
                        <Route path='/' element={<HomeCom />} />
                        {/* <Route path='/clear' element={<ClearBtnNav />} /> */}
                    </Routes>

                </BrowserRouter>
            </div>
        </div>
    )
}
