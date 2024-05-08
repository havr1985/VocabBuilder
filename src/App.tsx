
import { lazy } from 'react';
import './App.css'
import { Container } from './components/Container';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/HomePages'));
const Register = lazy(() => import('@/pages/RegisterPages'));
const Login = lazy(() => import('@/pages/LoginPages'));


function App() {
  

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Container>
  );
}

export default App;
