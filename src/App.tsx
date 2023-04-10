import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'
import News from './pages/News'
import Footballer from './pages/Footballer'
import Login from './pages/Login';
import Layout from './components/Layout';

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path="/footballer" element={<Footballer />}/>
          <Route path="/news" element={<News />} />
        </Route>
        <Route>
          <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 100vh;
`;



export default App
