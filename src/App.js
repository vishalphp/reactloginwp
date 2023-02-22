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
import Users from './components/Users';
import PrisistLogin from './components/PrisistLogin';

const allowedRoles = {
  'admin': ['administrator'],
  'editor':['editor'],
  'subscriber':['subscriber'],
  'all': ['administrator', 'editor', 'subscriber']
}

function App() {
  return (
      <Routes>
         <Route path='/' element={<Layout />}>
               
               <Route path='login' element={<Login />} />
               <Route path='Register' element={<Register />} />
               <Route path='unauthorized' element={<Unauthorized />} />

               <Route element={<PrisistLogin />}>

               <Route element={<RequireAuth allowedRoles={allowedRoles.all}/>} >
               <Route path='/' element={<Home />} />
               <Route path='users' element={<Users />} />
               </Route>

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
         </Route>
      </Routes>
  );
}

export default App;
