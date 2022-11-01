import './App.css';
import NavBar from '../../Globals/NavBarComponent/NavBar'
import SideBar from '../../Globals/SideBarComponent/SideBar'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SideBar/>
        <main className='content'>
          <Routes>
              <Route path='/Home'/>
          </Routes>

        </main>
    </div>
  );
}

export default App;
