import './App.css';
import NavBar from '../../Globals/NavBarComponent/NavBar'
import SideBar from '../../Globals/SideBarComponent/SideBar'
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../LoginPage/Login';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SideBar/>
        <main className='content'>
          <Routes path='/dashboard' element={<App/>}>
                <Route index path='home' element={<Login/>}/>
                <Route path='edit' element={<>HI from edit</>}/>
                <Route path='inbox' element={<>HI from inbox</>}/>
                <Route path='charts' element={<>HI from charts</>}/>
                <Route path='*' element={<Navigate to="home"/>}/>
            </Routes>
        </main>
    </div>
  );
}

export default App;
