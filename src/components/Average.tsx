import styled from 'styled-components';
import iconDate from '../img/iconDate.svg'
import { useState } from 'react';
import TablesInfo from './TablesInfo';


export const dateFootballer = [
  { date: '1991' },
  { date: '1992' },
  { date: '1993' },
]


const Mystats = () => {
  const [dateList, setDateList] = useState(false);
  const chooseYear = () => {
    setDateList(!dateList)
    function asas () {
    }
    asas()
    return
  };



  return (
    <ContainerResult>
      <ResulInner>
        <ResultTitle>
          Выберите год рождения спортсмена, чтобы посмотреть
          средний результат по данному возрасту
        </ResultTitle>
        <ChooseDate>
          <ResultInput onClick={chooseYear}>
            Выберите год рождения
            <DateIcon src={iconDate} />
          </ResultInput>
          {dateList && <DateList>
            {dateFootballer
              .map((item, index) => {
                return (
                  <DateValue
                    key={index}
                    onClick={chooseYear}>
                    {item.date} года рождения
                  </DateValue>
                )
              })}
          </DateList>}
          <TablesInfo />
        </ChooseDate>
      </ResulInner >
    </ContainerResult >
  );
};

const DateList = styled.div`
`;



const DateValue = styled.div`
padding: 20px;
border:solid 1px #25BA00;
margin-top: -1px;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
letter-spacing: 0.03em;
color: #2D2D2D;
min-width:358px;
cursor:pointer;
  &:hover{
    background-color: rgba(37, 186, 0, 0.1);
  }

`;

const DateIcon = styled.img`

`;


const ResultInput = styled.button`
background-color: none;
padding:20px 20px;
border:solid 1px #25BA00;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
letter-spacing: 0.03em;
color: rgba(0, 0, 0, 0.5);
min-width:399px;
display: flex;
justify-content: space-between;
align-items: center;
  &:hover{
    background-color: rgba(37, 186, 0, 0.1);
    cursor: pointer;
  }


`;

const ChooseDate = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
`;


const ResultTitle = styled.div`
text-align:center;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
text-align: center;
letter-spacing: 0.03em;
color: #2D2D2D;
width:550px;


`;

const ResulInner = styled.div`
padding:30px 0;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 20px;
width:1000px;
`;

const ContainerResult = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  width: calc(100% - 32px);
  padding: 0 17px ;
  display: flex;
  flex-direction: column;
  border:solid 1px #25BA00;
  align-items: center;
`;



export default Mystats