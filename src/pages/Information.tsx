import react from 'react';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';
import Container from '../components/Container';
import kachok from '../img/kachok.jpg'
import { Link } from 'react-router-dom';
import { information } from './ArtInfo';


const information_map = [1, 2, 3, 4]

const Information = () => {

  return (
    <Container>
      <InfoContainer>
        {information_map.map(e =>
          <InformationInner>
            <InformationItem>
              <InfoArtInfo>
                <InfoMore>
                  <Link to='/art' className='Info__more-link'>Информация</Link>
                </InfoMore>
                <InfoTitle>
                  {information.nameArt}
                </InfoTitle>
                <InfoSubTitle>
                  {information.shortInfo}
                </InfoSubTitle>
              </InfoArtInfo>
              <InfoDate>
                {information.dateInfo}
              </InfoDate>
            </InformationItem>
            <InfoCachok src={kachok} />
          </InformationInner>
        )}
      </InfoContainer>
    </Container>
  );
};

const InfoContainer = styled.div`
display: flex;
flex-flow: row wrap;
gap:48px;
padding-top:40px;
`;


const InfoDate = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 11px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
    &:before {
    content: "";
    border-bottom: 1px solid #25BA00;
    min-width: 50px;
    position: absolute;
    margin-top:-30px;
    }
`;

const InfoArtInfo = styled.div`
`;

const InfoSubTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.03em;
color: #FFFFFF;
margin-top: 10px;
max-width:200px;
`;

const InfoTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 35px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
margin-top: 30px;
max-width:200px;
`;

const InfoMore = styled.div`
`;

const InfoCachok = styled.img`

`;

const InformationItem = styled.div`
background-color: #2D2D2D;
padding:30px;
display: flex;
flex-direction:column;
justify-content: space-between;
`;

const InformationInner = styled.div`
display: flex;
`;


export default Information