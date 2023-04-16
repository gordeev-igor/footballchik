import styled from 'styled-components';
import allScore from '../img/all-scores.svg'
import backPack from '../img/backpack.svg'
import twovs from '../img/2vs2.svg'
import threevs from '../img/3vs3.svg'


const Scores = () => {
  return (
    <ScoresContainer>
      <ScoresInner>
        <ScoresItem>
          <ScoresParameter>
            <ParamIcon src={allScore}/>
            <ParamTitle>Всего заработано баллов:</ParamTitle>
            <ParamIndex>0</ParamIndex>
          </ScoresParameter>
          <ScoresParameter>
            <ParamIcon src={backPack}/>
            <ParamTitle>Лагерь:</ParamTitle>
            <ParamIndex>0</ParamIndex>
          </ScoresParameter>
          <ScoresParameter>
            <ParamIcon src={twovs}/>
            <ParamTitle>2 против 2:</ParamTitle>
            <ParamIndex>12</ParamIndex>
          </ScoresParameter>
          <ScoresParameter>
            <ParamIcon src={threevs}/>
            <ParamTitle>3 против 3:</ParamTitle>
            <ParamIndex>17</ParamIndex>
          </ScoresParameter>
        </ScoresItem>
      </ScoresInner>
    </ScoresContainer>
  )
}


const ParamIndex = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const ParamTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const ParamIcon = styled.img`

`;
const ScoresParameter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
gap:10px;

`;
const ScoresItem = styled.div`
display: flex;
flex-direction:column;
gap:32px;
`;

const ScoresInner = styled.div`
background-color: #F3FFF4;
padding:30px 20px;
width:fit-content;
border:1px solid #25BA00;
display: flex;
justify-content: center;
align-items: center;
`;


const ScoresContainer = styled.div`
 border: 1px solid rgba(37, 186, 0, 0.5);
 padding:50px 50px;
 display: flex;
justify-content: center;
align-items: center;
`;


export default Scores