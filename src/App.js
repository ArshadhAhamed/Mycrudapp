import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Sidebar from "./components/Sidebar";
import EditUser from "./components/EditUser";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  let [users,setUsers] = useState([
    {
      name:'Raj',
      email:'raj@gmail.com',
      mobile:'9910910901',
      address:'123, Dubai Main Road, Dubai',
      batch:'B46WET'
    },
    {
      name:'Naga',
      email:'naga@gmail.com',
      mobile:'9019019001',
      address:'123, Dubai Cross Cut Street, Dubai',
      batch:'B46WET'
    },
    {
      name:'Ashwin',
      email:'ashwin@gmail.com',
      mobile:'8918902091',
      address:'432, Dubai Cross Cut Street, Dubai',
      batch:'B46WET'
    }
  ])
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>  
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path='/EditUser/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
          <Route path='/profile/:id' element={<Profile users={users} setUsers={setUsers}/>}/>
          <Route path='*' element={<Navigate to='/dashboard'/>}/>
       </Routes>
      </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
