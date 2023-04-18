import styled from 'styled-components';
import Container from '../components/Container';
import mark from '../img/green-mark.svg'
import giftimg from '../img/giftimg.svg'
import { Link } from 'react-router-dom';

const AboutAchievements = () => {
  return (
    <WrapperAbout >
      <AboutContainer onClick={e => e.stopPropagation()}>
        <AboutContentItems>
          <AboutTitleCont>
            <AboutTitle>Достижения</AboutTitle>
          </AboutTitleCont>
          <AboutSubTitle>Для чего нужны?</AboutSubTitle>
          <AboutContent>
            <AboutMark src={mark} />
            <AbouText>Простая система обзора посеящаемости и увлеченности вашего ребенка.</AbouText>
          </AboutContent>
          <AboutContent>
            <AboutMark src={mark} />
            <AbouText>Возможность увидеть слабые и силные стороны игрока.</AbouText>
          </AboutContent>
          <AboutContent>
            <AboutMark src={mark} />
            <AbouText>Индивидуальные бонусы в зависимости от активности и достижений.</AbouText>
          </AboutContent>
        </AboutContentItems>
        <AboutContentForWhat>
          <AboutSubTitle>Для чего нужны?</AboutSubTitle>
          <AboutContentInner>
            <AboutLeft>
              <AboutContent>
                <AboutNumber>1)</AboutNumber>
                <AbouText>Посещение тренировок</AbouText>
              </AboutContent>
              <AboutContent>
                <AboutNumber>2)</AboutNumber>
                <AbouText>Участие в турнире 3x3</AbouText>
              </AboutContent>
              <AboutContent>
                <AboutNumber>3)</AboutNumber>
                <AbouText>Активность вне занятий</AbouText>
              </AboutContent>
            </AboutLeft>
            <AboutRight>
              <AboutContent>
                <AboutNumber>4)</AboutNumber>
                <AbouText>Участие в соревнованиях по Панна футболу</AbouText>
              </AboutContent>
              <AboutContent>
                <AboutNumber>5)</AboutNumber>
                <AbouText>Тестирование</AbouText>
              </AboutContent>
              <AboutContent>
                <AboutNumber>6)</AboutNumber>
                <AbouText>Лагерь</AbouText>
              </AboutContent>
            </AboutRight>
          </AboutContentInner>
        </AboutContentForWhat>
        <AboutBonus>
          <AboutSubTitle>Бонусы в зависимости от индивидуальных достижений:</AboutSubTitle>
          <AboutBonusInner>
            <AboutBonusInfo>
              <Bonus>
                <Percent>30</Percent>
                <Sep>-</Sep>
                <BonusText>
                  Скидка на абонемент в 30%.
                  1 персональная тренировка.
                </BonusText>
              </Bonus>
            </AboutBonusInfo>
            <AboutBonusInfo>
              <Bonus>
                <Percent>50</Percent>
                <Sep>-</Sep>
                <BonusText>
                  Скидка на абонемент в 50%.
                  2 Персональные тренировки.
                  5% скидка на лагерь.
                </BonusText>
              </Bonus>
            </AboutBonusInfo>
            <AboutBonusInfo>
              <Bonus>
                <Percent>75</Percent>
                <Sep>-</Sep>
                <BonusText>
                  Скидка на абонемент в 75%.
                  3 Персональнае тренировки.
                  15% скидка на лагерь.
                </BonusText>
              </Bonus>
            </AboutBonusInfo>
            <AboutBonusInfo>
              <Bonus>
                <Percent>100</Percent>
                <Sep>-</Sep>
                <BonusText>
                  Месячный абонемент.
                  5 Персональных тренировок.
                  25% скидка на лагерь.
                </BonusText>
              </Bonus>
            </AboutBonusInfo>
          </AboutBonusInner>
          <Gifts>
            <GiftImg src={giftimg} />
            <GiftText>Фирменные подарки</GiftText>
          </Gifts>
        </AboutBonus>
        <Trainer>Обо всех подробностях уточняйте у Вашего тренера.</Trainer>
      </AboutContainer>
    </WrapperAbout>
  )
}

const AboutBack = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
letter-spacing: 0.03em;
color: #25BA00;
`;

const Trainer = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.03em;
color: #000000;
`;


const GiftImg = styled.img`
`;

const GiftText = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: px;
line-height: 24px;
color: #2D2D2D;
`;

const Gifts = styled.div`
display: flex;
justify-content: center;
gap: 20px;
`;


const AboutBonusInner = styled.div`
display: flex;
flex-wrap:wrap;
align-items: center;
gap: 50px;
`;


const AboutBonusInfo = styled.div`
display: flex;
justify-content: space-between;
min-width:400px;
gap: 40px;
`;


const Percent = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 17px;
color: #25BA00;
`;
const Sep = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 17px;
color: #2D2D2D;
`;
const BonusText = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: #2D2D2D;
max-width:250px;
`;

const AboutBonus = styled.div`
display: flex;
flex-direction:column;
flex-wrap:wrap;
justify-content: space-between;
gap: 30px;
width:850px;
`;

const Bonus = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
min-width: 350px;

`;

const AboutContentInner = styled.div`
display: flex;
gap: 85px;
`;

const AboutLeft = styled.div`
display: flex;
flex-direction:column;
gap:20px;
`;
const AboutRight = styled.div`
display: flex;
flex-direction:column;
gap:20px;
`;


const AboutContentForWhat = styled.div`
display: flex;
flex-direction:column;
flex-wrap:wrap;
gap:20px;
`;

const AboutNumber = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 17px;
color: #25BA00;
`;

const AbouText = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 17px;
color: #2D2D2D;
margin-left:10px;
`;

const AboutMark = styled.img`
`;


const AboutContent = styled.div`
display: flex;
align-items: center;
`;


const AboutTitleCont = styled.div`
display: flex;
justify-content: center;
`;

const AboutSubTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.03em;
color: #000000;
`;

const AboutTitle = styled.div`
padding-bottom:5px;
border-bottom :solid 1px #25BA00;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 30px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #000000;
width:fit-content;
`;


const AboutContentItems = styled.div`
display: flex;
flex-direction:column;
gap:20px;
`;
const AboutContainer = styled.div`
padding:25px ;
display: flex;
flex-direction:column;
gap:40px;
width:fit-content;
background-color: #ffffff;
`;
const WrapperAbout = styled.div`
width:fit-content;
height:fit-content;
background-color: #fff;




`;





export default AboutAchievements