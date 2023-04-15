import styled from "styled-components";
import Container from "./Container";
import mark from '../img/green-mark.svg'
import InfoDays from "./Schools";

const SheduleTable = () => {
  return (
    <Container>
      <SheduleTableInner>
        <SheduleTableTitle>
          расписание
        </SheduleTableTitle>
        <SheduleTableItem>
          <Adress>
            <ItemTitle>Сормановская12/6</ItemTitle>
            <ItemSubTitle>12/6</ItemSubTitle>
          </Adress>
        </SheduleTableItem>
      </SheduleTableInner>
    </Container>
  )
}


const Adress = styled.div`
display: flex;
justify-content: center;
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

const ItemSubTitle = styled.div`

`;


const ItemTitle = styled.div`


`;
const SheduleTableItem = styled.div`


`;


const SheduleTableTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 30px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
`;


const SheduleTableInner = styled.div`
background-color: #2D2D2D;
padding:40px 30px 100px;
`;



export default SheduleTable