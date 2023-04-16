import styled from 'styled-components';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import arrow from '../img/arrow.svg'
import { useState } from 'react';
import Events from '../components/Events';
import Scores from '../components/Scores';

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
      <AchievStats>
        <StatsTitle1>
          <StatsTitleUpper>
            <StatsTitleInfo>
              Количество посещённых тренировок:
            </StatsTitleInfo>
            <StatsTitleCount>
              12
            </StatsTitleCount>
          </StatsTitleUpper>
          <AboutAchievs>
            <Link to="/aboutAchievements"> Подробнее про “Достижения”</Link>
          </AboutAchievs>
        </StatsTitle1>
        <StatsTitle>
          <StatsTitleInfo>
            Посещение лагеря:
          </StatsTitleInfo>
          <StatsTitleCount>
            3
          </StatsTitleCount>
        </StatsTitle>
        <StatsTitleMore onClick={showEvents} defaultChecked={events}>
          <StatsTitleInfoLink defaultChecked={events}>
            Мероприятия
          </StatsTitleInfoLink>
          <StatsTitleArrow src={arrow} defaultChecked={events} />
        </StatsTitleMore>
        {events && <Events />}
        <StatsTitleMore onClick={showScores} defaultChecked={scores}>
          <StatsTitleInfoLink defaultChecked={scores}>
            Заработано баллов
          </StatsTitleInfoLink>
          <StatsTitleArrow src={arrow} defaultChecked={scores} />
        </StatsTitleMore>
        {scores && <Scores />}
      </AchievStats>
    </Container>
  )
}


const StatsTitleUpper = styled.div`
display: flex;
gap: 10px;
`;

const StatsTitle1 = styled.div`
display: flex;
justify-content: space-between;
width:100%;
`;


const StatsTitleInfoLink = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
color: #2D2D2D;
color: ${props => props.defaultChecked ? "#25BA00" : "#2D2D2D"};
  &:hover{
    color: #25BA00 ;
  } 
`;

const StatsTitleMore = styled.div`
display: flex;
gap: 10px;
align-items: center;
cursor:pointer;
width:fit-content;
  &:hover{
    color: #25BA00 ;
  } 
`;

const StatsTitleArrow = styled.img`
  transform: ${props => props.defaultChecked ? "rotate(90deg)" : "rotate(0deg)"} ;  
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
padding: 78px 0px;
min-height:50vh;

`;



export default Achievements