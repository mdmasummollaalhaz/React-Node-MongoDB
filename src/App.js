import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Adduser from './components/AddUser/Adduser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='user/add' element={<Adduser></Adduser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
