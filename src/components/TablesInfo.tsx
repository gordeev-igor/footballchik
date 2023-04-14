import styled from "styled-components";
import udar from "../img/udar.svg"
import speed from "../img/speed.svg"
import reaction from "../img/reaction.svg"
import jump from "../img/jump.svg"
import target from "../img/target.svg"



const average_map = [1,2 ,3,4]

const TablesInfo = () => {



  return (
    <>
      <TableWrapper>
        <TableContainer >
          <IndicatorList>
            <ResultText>
              <AverageResult>Средний р-т</AverageResult>
              <BestResult>Лучший р-т</BestResult>
            </ResultText>
            <IndicatorItem>
              <IndicatorIcon src={udar} />
              <IndicatorText>Удар</IndicatorText>
              <IndicatorAverage>31</IndicatorAverage>
              <IndicatorBest>123</IndicatorBest>
            </IndicatorItem>
            <IndicatorItem>
              <IndicatorIcon src={jump} />
              <IndicatorText>Прыжок</IndicatorText>
              <IndicatorAverage>31</IndicatorAverage>
              <IndicatorBest>12</IndicatorBest>
            </IndicatorItem>
            <IndicatorItem>
              <IndicatorIcon src={reaction} />
              <IndicatorText>Реакция</IndicatorText>
              <IndicatorAverage>321</IndicatorAverage>
              <IndicatorBest>1213</IndicatorBest>
            </IndicatorItem>
            <IndicatorItem>
              <IndicatorIcon src={speed} />
              <IndicatorText>Скорость</IndicatorText>
              <IndicatorAverage>312</IndicatorAverage>
              <IndicatorBest>212</IndicatorBest>
            </IndicatorItem>
          </IndicatorList>
        </TableContainer>
      </TableWrapper>
    </>
  )
}


const IndicatorAverage = styled.div`
padding: 20px 0;
border-bottom: solid 1px rgba(37, 186, 0, 0.5);
width:100%;
text-align: center;
min-width:100px;

`;

const IndicatorBest = styled.div`
padding: 20px 0;
`;


const IndicatorItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
border-left: solid 1px rgba(37, 186, 0, 0.5);


`;
const IndicatorText = styled.div`
padding: 15px 35px;
border-bottom: solid 1px rgba(37, 186, 0, 0.5);


`;

const IndicatorIcon = styled.img`
padding: 0 10px;

`;

const AverageResult = styled.div`
padding: 20.1px 30px;
border-top:solid 1px rgba(37, 186, 0, 0.5); 
min-width: 122px;

`;

const BestResult = styled.div`
padding: 20px 30px;
border-top:solid 1px rgba(37, 186, 0, 0.5); 
min-width: 122px;

`;

const ResultText = styled.div`
display: flex;
align-items:center;
flex-direction:column;
justify-content:end;
min-width:fit-content;
/* border: solid 1px #25BA00; */
`;


const IndicatorList = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
color: #2D2D2D;
display: flex;
justify-content: space-between;
`;

const TableContainer = styled.div`
width: fit-content;
height: fit-content;
margin-top: 20px;
`;

const TableWrapper = styled.div`

`;


export default TablesInfo