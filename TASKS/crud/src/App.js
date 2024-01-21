import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/edit/:userid' element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
