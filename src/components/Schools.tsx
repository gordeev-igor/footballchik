import Container from "./Container";
import styled from "styled-components";
import schoolsImg from '../img/scools-img.jpg'
import mark from '../img/green-mark.svg'
import { scheduleTime } from "./Schedule";
const schools = [
  'Сормановская',
  'восточно-кругликовская',
  'академи трублиина 49',
  'зиповская 34 к 2',
]

const days = [
  'Вторник',
  'Четверг',
  'Суббота',
]

const Schools = () => {
  return (
    <Container>
      <SchoolsContainer>
        {schools.map(e =>
          <SchoolsItem>
            <SchoolImg src={schoolsImg} />
            <SchoolInfo>
              <InfoTitle> {e} </InfoTitle>
              <InfoSubtitle>12/6</InfoSubtitle>
              {days.map(e =>
                <InfoDays>
                  <InfoDay>{e}</InfoDay>
                    <InfoTime>
                      <TimeMark src={mark} />
                      <Time>18:00</Time>
                    </InfoTime>
                </InfoDays>
              )}
            </SchoolInfo>
          </SchoolsItem>
        )}
      </SchoolsContainer>
    </Container>
  )
}


const Time = styled.div`
`;
const TimeMark = styled.img`
`;

const InfoDays = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;
`;
const InfoTime = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: right;
color: #FFFFFF;
display: flex;
`;


const InfoDay = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
color: #FFFFFF;

`;

const InfoSubtitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #FFFFFF;
`;


const InfoTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #FFFFFF;
`;

const SchoolInfo = styled.div`
padding:20px 20px 80px;

`;


const SchoolImg = styled.img`
`;

const SchoolsItem = styled.div`
background-color: #2D2D2D;
`;


const SchoolsContainer = styled.div`
padding: 100px 0;
display: flex;
align-items: center;
justify-content: center;
flex-wrap:wrap;
gap: 50px;
`;


export default Schools