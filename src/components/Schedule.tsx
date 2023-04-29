import styled from "styled-components"
import Container from "./Container"
import mark from '../img/green-mark.svg'

const scheduleWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
]

const scheduleDay = [
  'День',
  'Вечер'
]

export const scheduleTime = [
  '10:00',
  '18:00',
  '20:00',
]


const Schedule = () => {
  return (
    <Container>
      <ScheduleContainer>
        {scheduleDay.map(day =>
          <WrapSchedule>
            <ScheduleTitle>
              {day}
            </ScheduleTitle>
            <ScheduleWeeks>
              {scheduleWeek.map(week =>
                <ScheduleWeek>
                  <ScheduleDayTitle>
                    {week}
                  </ScheduleDayTitle>
                  {scheduleTime.map(time =>
                    <ScheduleDay>
                      <DayMark src={mark} />
                      <DayTime>{time}</DayTime>
                      <DayAdress>Зиповская 24/7</DayAdress>
                    </ScheduleDay>
                  )}
                </ScheduleWeek>
              )}
            </ScheduleWeeks>
          </WrapSchedule>
        )}
      </ScheduleContainer>
    </Container>

  )
}

const WrapSchedule = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  gap:15px;
  padding:30px 0;
`;

const DayAdress = styled.div`

`;
const DayTime = styled.div`

`;
const DayMark = styled.img`

`;
const ScheduleDay = styled.div`
display: flex;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 17px;
color: #2D2D2D;
gap:10px;
margin-top: 10px;
align-items: center;
`;

const ScheduleDayTitle = styled.div`
display: flex;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;
color: #2D2D2D;
justify-content: center;
margin-top: 20px;
`;

const ScheduleWeeks = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
gap:75px;
`;


const ScheduleWeek = styled.div`
`;

const ScheduleTitle = styled.div`
display: flex;
justify-content: center;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;
color: #2D2D2D;
border-bottom: 1px solid #25BA00;
width:fit-content; 
padding-bottom:5px;
`;



const ScheduleContainer = styled.div`
  border: 1px solid rgba(37, 186, 0, 0.5);
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  gap:15px;
  padding:30px 0;
  margin:50px 0;
  
    &:after {
    content: "";
    position:absolute;
    border-bottom: 1px solid #25BA00;
    min-width: 830px;
  }
`;

export default Schedule