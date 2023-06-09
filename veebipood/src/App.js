import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv'

function App() {
  return (
    <div className="App">
      <Link to='/'>
      <img className='pilt' src="https://nobecars.com/wp-content/uploads/2022/01/Untitled-2-5-1024x473.png" alt="" />
      </Link>

        <Link to='/lisa-toode'>
          <button className='nupp'> Lisa toode</button>
        </Link>

        <Link to='/ostukorv'>
          <button className='nupp'>ostukorv</button>
        </Link>
      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='ostukorv' element={ <Ostukorv />} />
      </Routes>
    </div>
  );
}

export default App;
