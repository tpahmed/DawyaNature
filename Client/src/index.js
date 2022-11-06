import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './scenes/MainPage/App';
import Login from './scenes/LoginPage/Login';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes path='login'>
                <Route path='login' element={<Login/>}/>
                <Route path='dashboard/*' element={<App/>}/>
                <Route path='*' element={<Navigate to="login"/>}/>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);
