import styled from 'styled-components';
import dateIcon from '../img/date-icon.svg'
import goalsIcon from '../img/goals.svg'
import missIcon from '../img/miss.svg'
import scoreIcon from '../img/score.svg'


const events_map = [
  'Соревнования 2vs2',
  'Соревнования 3vs3',
  'Пенальти ',
]

const eventsItem_map = [1, 2, 3, 4, 5, 6]

const Events = () => {
  return (
    <EventsInner>
      {events_map.map(e =>
        <EventsContentItems>
          <EventsTitle>{e}</EventsTitle>
          <EventsContnenItems>
            {eventsItem_map.map(e=>
            <EventsItem>
              <EventParameter>
                <ParameterIcon src={dateIcon} />
                <ParameterTitle>Дата:</ParameterTitle>
                <ParameterIndex>12.02.2022</ParameterIndex>
              </EventParameter>
              <EventParameter>
                <ParameterIcon src={goalsIcon} />
                <ParameterTitle>Забито:</ParameterTitle>
                <ParameterIndex>12</ParameterIndex>
              </EventParameter>
              <EventParameter>
                <ParameterIcon src={missIcon} />
                <ParameterTitle>Пропущено:</ParameterTitle>
                <ParameterIndex>22</ParameterIndex>
              </EventParameter>
              <EventParameter>
                <ParameterIcon src={scoreIcon} />
                <ParameterTitle>Общая оценка:</ParameterTitle>
                <ParameterIndex>2</ParameterIndex>
              </EventParameter>
            </EventsItem>
            )}
          </EventsContnenItems>
        </EventsContentItems>
      )}
    </EventsInner>
  )
}




const EventsContnenItems = styled.div`
display: flex;
gap: 30px;
justify-content: space-between;
flex-flow:row wrap;

`;
const EventsContentItems = styled.div`
display: flex;
gap:30px;
flex-direction:column;
`;


const ParameterIndex = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;
const ParameterTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;
const ParameterIcon = styled.img`
`;

const EventParameter = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 10px;
`;


const EventsItem = styled.div`
background-color:  #F3FFF4;
border: 1px solid #25BA00;
padding:35px 85px;
display: flex;
flex-direction: column;
gap: 30px;
width:fit-content;
`;




const EventsTitle = styled.div`
display: flex;
justify-content: center;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const EventsInner = styled.div`
  border: 1px solid rgba(37, 186, 0, 0.5);
  padding:30px;
  display: flex;
  flex-direction:column;
  gap: 50px;

`;


export default Events