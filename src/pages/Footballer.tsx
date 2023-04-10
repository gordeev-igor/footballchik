import styled from 'styled-components';
import makar from '../img/footballer1.jpg';
import moreicon from '../img/more.svg'
import Mystats from '../components/Mystats';
import Average from '../components/Average';
import { useState } from 'react';
import Container from '../components/Container';

const footballer = {
  name: 'Макар бондарев',
  position: 'Нападающий',
  age: '29.01.2005',
  foot: 'Быстрая',
  team: 'FC Спартак',
}

const Footballer = () => {

  const [more, setMore] = useState(false);
  const moreStats = () => {
    setMore(!more)
  };
  
  const [show, setShow] = useState(false);
  const showStats = () => {
    setShow(!show)
  };



  return (
    <Container>
      <Information>
        <Resume>
          <Name>
            {footballer.name}
          </Name>
          <Position>
            <Title>
              Позиция:
            </Title>
            <SubTitle>
              {footballer.position}
            </SubTitle>
          </Position>
          <Age>
            <Title>
              Возраст:
            </Title>
            <SubTitle>
              {footballer.age}
            </SubTitle>
          </Age>
          <Foot>
            <Title>
              Нога:
            </Title>
            <SubTitle>
              {footballer.foot}
            </SubTitle>
          </Foot>
          <Team>
            <Title>
              Команда:
            </Title>
            <SubTitle>
              {footballer.team}
            </SubTitle>
          </Team>
        </Resume>
        <Avatar>
          <FootbalPlayer src={makar} />
        </Avatar>
      </Information>
      <Statistic defaultChecked={more} onClick={moreStats} >
        <MyStats defaultChecked={more}>
          Моя статистика
        </MyStats>
        <MoreIcon src={moreicon} defaultChecked={more} />
      </Statistic>
      {more && <Mystats />}
      <Result defaultChecked={show} onClick={showStats} >
        <AverageResult defaultChecked={show}>
          Средний результат
        </AverageResult>
        <ShowResultIcon src={moreicon} defaultChecked={show} />
      </Result>
      {show && <Average />}
    </Container>

  )
}

const Result = styled.div`
padding: 30px 0 ;
border-top: solid 1px #25BA00 ;
border-bottom: ${props => props.defaultChecked ? "none" : "solid 1px #25BA00"} ;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 30px;  
cursor:pointer;
`;

const AverageResult = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 30px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: ${props => props.defaultChecked ? "#25BA00" : "#2D2D2D"};
  &:hover{
    color: #25BA00 ;
  } 
`;
const ShowResultIcon = styled.img`
  transform: ${props => props.defaultChecked ? "rotate(90deg)" : "rotate(0deg)"} ;
`;

const MoreIcon = styled.img`
  transform: ${props => props.defaultChecked ? "rotate(90deg)" : "rotate(0deg)"} ;
`;

const MyStats = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 30px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: ${props => props.defaultChecked ? "#25BA00" : "#2D2D2D"};
  &:hover{
    color: #25BA00 ;
  } 

`;

const Statistic = styled.div`
padding: 30px 0 ;
border-top: solid 1px #25BA00 ;
border-bottom: ${props => props.defaultChecked ? "none" : "solid 1px #25BA00"} ;
display: flex;
align-items: center;
gap: 20px;
margin-bottom:-1px; 
cursor:pointer;
`;



const Information = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 70px 0 100px;
`;

const FootbalPlayer = styled.img`
`;

const SubTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 19px;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #2D2D2D;
`;

const Title = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;
letter-spacing: 0.05em;
color: #2D2D2D;
`;

const Team = styled.li`
gap: 10px;
display: flex;
`;

const Foot = styled.li`
display: flex;
gap: 10px;
`;

const Age = styled.li`
gap: 10px;
display: flex;
`;

const Position = styled.li`
gap: 10px;
display: flex;
`;

const Name = styled.li`
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 50px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #2D2D2D;
`;

const Resume = styled.ul`
padding:  40px;
border-left: 1px solid #25BA00;
display: flex;
flex-direction:column;
gap: 30px;
`;

const Avatar = styled.div`
`;

export default Footballer