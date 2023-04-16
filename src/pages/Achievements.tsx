import styled from 'styled-components';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import arrow from '../img/arrow.svg'
import { useState } from 'react';
import Events from '../components/Events';
import '../index.css'


const Achievements = () => {


  const [scores, setScores] = useState(false)
  const showScores = () => {
    setScores(!scores)
  }
  const [events, setEvents] = useState(false)
  const showEvents = () => {
    setEvents(!events)
  }

  return (
    <Container>
      <ContainerAchievements>
        <AchievStats>
          <StatsTitle>
            <StatsTitleInfo>
              Количество посещённых тренировок:
            </StatsTitleInfo>
            <StatsTitleCount>
              12
            </StatsTitleCount>
          </StatsTitle>
          <StatsTitle>
            <StatsTitleInfo>
              Посещение лагеря:
            </StatsTitleInfo>
            <StatsTitleCount>
              3
            </StatsTitleCount>
          </StatsTitle>
          <StatsTitle onClick={showEvents} defaultChecked={events}>
            <StatsTitleInfo className='stats__title-show'>
              Мероприятия
            </StatsTitleInfo>
            <StatsTitleArrow src={arrow} />
          </StatsTitle>
          <StatsTitle onClick={showScores} defaultChecked={scores}>
            <StatsTitleInfo className='stats__title-show'>
              Заработано баллов
            </StatsTitleInfo>
            <StatsTitleArrow src={arrow} />
          </StatsTitle>
        </AchievStats>
        <AboutAchievs>
          <Link to="/aboutAchievements"> Подробнее про “Достижения”</Link>
        </AboutAchievs>
      </ContainerAchievements>
    </Container>
  )
}

const StatsTitleArrow = styled.img`

`;

const StatsTitleInfo = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const StatsTitleCount = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const StatsTitle = styled.div`
display: flex;
gap: 10px;
align-items: center;
width:fit-content;
`;

const AboutAchievs = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 30px;
text-align: right;
letter-spacing: 0.03em;
color: #2D2D2D;
`;


const AchievStats = styled.div`
display: flex;
flex-direction:column;
gap:30px;
`;

const ContainerAchievements = styled.div`
display: flex;
justify-content: space-between;


`;

export default Achievements