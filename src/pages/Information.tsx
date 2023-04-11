import react from 'react';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';
import Container from '../components/Container';
import kachok from '../img/kachok.jpg'
import { Link } from 'react-router-dom';
import { information } from './ArtInfo';
// export const information = {
//   moreInfo: 'Информация',
//   titleInfo: 'Тренировки на улице',
//   subTileInfo: 'Данный способ поможет вам развить силу',
//   date: '15 окт. 2021',
// }

const Information = () => {

  return (
    <Container>
      <NewsInner>
        <Stronger>
          <StrongerNews>
            <MainInfo>
              <NewsInfo >
                <Link className='link__information' to='/art'>
                  {information.moreInfo}
                </Link>
              </NewsInfo>
              <NewsTitle>
                {information.nameArt}
              </NewsTitle>
              <NewsSub>
                {information.shortInfo}
              </NewsSub>
            </MainInfo>
            <NewsDate>
              {information.date}
            </NewsDate>
          </StrongerNews>
          <StrongerImage src={kachok} />
        </Stronger>
      </NewsInner>
    </Container>
  );
};

const MainInfo = styled.div`
display: flex;
flex-direction:column;
`;

const StrongerNews = styled.div`
  background-color: #2D2D2D;
  padding: 30px;
  min-height:fit-content;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const NewsInfo = styled.a`
padding: 12px;
border: 1px solid #25BA00;
text-align: center;
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 13px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 30px;
width: fit-content;
`;

const NewsTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 10px;
`;

const NewsSub = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.03em;
color: #FFFFFF;
padding: 2px 0 0 ;
/* border-top: 1px solid #25BA00; */
width: fit-content;
`;

const StrongerImage = styled.img`
width:50%;
`;

const NewsDate = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 11px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
  &:before{
    border: 1px solid #25BA00;

  }
`;

const Stronger = styled.div`
display: flex;
max-width:48%;
justify-content: space-between;
`;

const LoadStyle = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const NewsInner = styled.div`
display: flex;
padding: 20px 0 ;
flex-wrap: wrap;
gap: 48px;
justify-content: center;
align-items: center;
`;

export default Information