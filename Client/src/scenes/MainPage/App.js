import './App.css';

import SideBar from '../../Globals/SideBarComponent/SideBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../../Globals/NavBarComponent/NavBar';
import Client from '../../components/Client';
import Inbox from '../../components/Inbox.js';
import Chart from '../../components/Chart.js';
import Holder from '../../components/Holder';
import Offres from '../../components/Offres';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <SideBar/>
        <main className='content'>
          <Routes path='/dashboard' element={<App/>}>
                <Route index path='home' element={<Holder content={<center>&#9842;Not Implemented &#9842;</center>} title="Page D'accueil"/>}/>
                <Route path='edit' element={<><Holder content={<></>} title="Modifier les pages"/><Holder content={<Offres/>} title="Modifier les offres"/></>}/>
                <Route path='inbox' element={<Holder content={<Inbox/>} title="boîte de réception"/>}/>
                <Route path='client' element={<Holder content={<Client/>} title="Formulaire Du Client"/>}/>
                <Route path='charts' element={<Holder content={<Chart/>} title="Page D'accueil"/>}/>
                <Route path='*' element={<Navigate to="home"/>}/>
            </Routes>
        </main>
    </div>
  );

}

export default App;
