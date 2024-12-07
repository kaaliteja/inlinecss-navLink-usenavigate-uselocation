import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Tasks from './Components/Tasks';
import Leaves from './Components/Leaves';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login/>}></Route>
      <Route path="/signup" element = {<Signup/>}></Route>
      <Route path="/dashboard" element = {<Dashboard/>}></Route>
      <Route path="/tasks" element = {<Tasks/>}></Route>
      <Route path="/Leaves" element = {<Leaves/>}></Route>
      <Route path="*" element = {<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
