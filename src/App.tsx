import './App.css'
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom'
import News from './pages/News'
import Footballer from './pages/Footballer'
import Login from './pages/Login';
import Layout from './components/Layout';
import Information from './pages/Information';
import ArtInfo from './pages/ArtInfo';
import Timesheet from './pages/Timesheet';
import Achievements from './pages/Achievements';


const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/footballer" element={<Footballer />} />
          <Route path="/news" element={<News />} />
          <Route path="/information" element={<Information />} />
          <Route path="/art" element={<ArtInfo />} />
          <Route path="/timesheet" element={<Timesheet />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path='*' element={<Navigate to='/footballer' />} />
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
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
