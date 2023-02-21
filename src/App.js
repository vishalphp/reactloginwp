import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Unauthorized from './components/Unauthorized'
import Home from './components/Home'
import Editor from './components/Editor'
import Admin from './components/Admin'
import Lounge from './components/Lounge'
import RequireAuth from './components/RequireAuth';

const allowedRoles = {
  'admin': ['administrator'],
  'editor':['editor'],
  'subscriber':['subscriber']
}

function App() {
  return (
      <Routes>
         <Route path='/' element={<Layout />}>
               
               <Route path='login' element={<Login />} />
               <Route path='Register' element={<Register />} />
               <Route path='unauthorized' element={<Unauthorized />} />

              
               <Route path='/' element={<Home />} />

               <Route element={<RequireAuth allowedRoles={allowedRoles.editor}/>} >
               <Route path='editor' element={<Editor />} />
               </Route>
               <Route element={<RequireAuth allowedRoles={allowedRoles.admin} />} >
               <Route path='admin' element={<Admin />} />
               </Route>
               <Route element={<RequireAuth allowedRoles={allowedRoles.subscriber}/>} >
               <Route path='lounge' element={<Lounge />} />
               </Route>
         </Route>
      </Routes>
  );
}

export default App;
