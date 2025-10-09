import logo from './logo.svg';
import './App.css';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import { Button } from 'react-bootstrap';
import Admin from './component/Admin/Admin';
import Header from './component/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>

      <div className='main-container'>
        <div className='sidenav-contanier'>

        </div>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </div>


  );
}

export default App;
