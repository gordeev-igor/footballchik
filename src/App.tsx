import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components';
import { Routes, Route, Router } from 'react-router-dom'
import News from './pages/News'
import Footballer from './pages/Footballer'
import Login from './components/Login';

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Routes>
          <Route path="/Footballer" element={<Footballer />} />
          <Route path="/News" element={<News />}/>
        </Routes>
      </Container>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
`;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  width: calc(100% - 32px);
  padding: 0 17px ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App
