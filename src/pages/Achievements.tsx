import styled from 'styled-components';
import Container from '../components/Container';
import { Link } from 'react-router-dom';


const Achievements = () => {
  return (
    <Container>
      <ContainerAchievements>
        <AchievStats>

        </AchievStats>
        <AboutAchievs>
          <Link to="/aboutAchievements"> Подробнее про “Достижения”</Link>
        </AboutAchievs>
      </ContainerAchievements>
    </Container>
  )
}


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

`;

const ContainerAchievements = styled.div`
display: flex;
justify-content: space-between;


`;

export default Achievements