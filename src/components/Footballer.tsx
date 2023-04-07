import styled from 'styled-components';
import makar from '../img/footballer1.jpg';
import moreicon from '../img/more.svg'
import Mystats from './Mystats';
import { useState } from 'react';




function Footballer() {

  const [more, setMore] = useState(false);
  const moreStats = () => {
    setMore(!more)
  };

  return (
    <>
      <Information>
        <Resume>
          <Name>
            Макар бондарев
          </Name>
          <Position>
            <Title>
              Позиция:
            </Title>
            <SubTitle>
              Нападающий
            </SubTitle>
          </Position>
          <Age>
            <Title>
              Возраст:
            </Title>
            <SubTitle>
              29.01.2005
            </SubTitle>
          </Age>
          <Foot>
            <Title>
              Нога:
            </Title>
            <SubTitle>
              Быстрая
            </SubTitle>
          </Foot>
          <Team>
            <Title>
              Команда:
            </Title>
            <SubTitle>
              FC Спартак
            </SubTitle>
          </Team>
        </Resume>
        <Avatar>
          <FootbalPlayer src={makar} />
        </Avatar>
      </Information>
      <Statistic>
        <MyStats>
          Моя статистика
        </MyStats>
        <MoreIcon src={moreicon} onClick={moreStats} defaultChecked={more} />
      </Statistic>
      {more && <Mystats />}
    </>

  )
}

const MoreIcon = styled.img`
  cursor: pointer;
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
color: #25BA00;
`;

const Statistic = styled.div`
padding: 30px 0 ;
border-top: solid 1px #25BA00 ;
border-bottom: solid 1px #25BA00 ;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 30px;
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