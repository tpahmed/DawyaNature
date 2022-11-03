import './App.css';
import NavBar from '../../Globals/NavBarComponent/NavBar'
import SideBar from '../../Globals/SideBarComponent/SideBar'
import { Route, Routes, Navigate } from 'react-router-dom';
import Holder from '../../components/Holder';
import Chart from '../../components/Chart.js';
import Inbox from '../../components/Inbox.js';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SideBar/>
        <main className='content'>
          <Routes path='/dashboard' element={<App/>}>
                <Route index path='home' element={<Holder content={<Chart/>} title="Page D'accueil"/>}/>
                <Route path='edit' element={<div>HI from edit</div>}/>
                <Route path='inbox' element={<Holder content={<Inbox/>} title="boîte de réception"/>}/>
                <Route path='charts' element={<>HI from charts</>}/>
                <Route path='*' element={<Navigate to="home"/>}/>
            </Routes>
        </main>
    </div>
  );
}

export default App;
