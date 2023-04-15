import styled from 'styled-components';
import vk from '../img/vk.svg'
import tg from '../img/tg.svg'
import phone from '../img/phone.svg'
import mail from '../img/mail.svg'
import main from '../img/main.svg'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container';


const abonement = {
  lastPay: '29.03.2022',
  time: 'месяц',
  type: 'базовый',
}

const Header = () => {
  return (
    <Container>
      <HeaderTopInner>
        <HeaderInfo>
          <Social>
            <Link to='#'>
              <VkLogo src={vk} />
            </Link>
            <Link to='#'>
              <TgLogo src={tg} />
            </Link>
          </Social>
          <PayInfo>
            <LastPay>
              <TitleTe>
                Крайняя оплата:
              </TitleTe>
              <SubText>
                {abonement.lastPay}
              </SubText>
            </LastPay>
            <PayMonth>
              <TitleTe>
                Оплачено на:
              </TitleTe>
              <SubText>
                {abonement.time}
              </SubText>
            </PayMonth>
            <Abonem>
              <TitleTe>
                Абонемент:
              </TitleTe>
              <SubText>
                {abonement.type}
              </SubText>
            </Abonem>
          </PayInfo>
        </HeaderInfo>
        <HeaderConnect>
          <Phone>
            <IconPhone src={phone} />
            <PhoneNumber>+8 918 645 90 99</PhoneNumber>
          </Phone>
          <Mail>
            <IconMail src={mail} />
            <MailBox>
              footme@gmail.com
            </MailBox>
          </Mail>
        </HeaderConnect>
      </HeaderTopInner>
      <HeaderBotInner>
        <MainLogo src={main} />
        <NavBar>
          <NavLi>
            <NavLink to='/footballer'>Главная</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to='/news'>Новости</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to='/timesheet'>Расписание</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to='/achievements'>Достижения</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to='/information'>Информация</NavLink>
          </NavLi>
        </NavBar>
        <Authorization>
          <Login>
            <Link to='/login'>
              Войти
            </Link>
          </Login>
          <Registration>
            <Link className='registration__link' to='#'>
              Зарегистрироваться
            </Link>
          </Registration>
        </Authorization>
      </HeaderBotInner>
    </Container>
  )
}



const NavLi = styled.li`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 13px;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #2D2D2D;
padding-bottom:5px;
border-bottom: 1px solid transparent;
  &:hover{
    border-bottom: 1px solid #25BA00 ;
  }
`;



const Login = styled.div`
display: flex;
align-items: center;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 13px;
letter-spacing: 0.03em;
color: #2D2D2D;

`;

const Registration = styled.div`
padding: 19px 12px;
background-color: #25BA00;
border-radius: 5px;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 13px;
letter-spacing: 0.03em;
`;


const NavBar = styled.ul`
display: flex;
gap: 50px;

`;

const Authorization = styled.div`
display: flex;
gap: 40px;
`;




const HeaderTopInner = styled.div`
padding: 17px 0;
border-bottom: 1px solid #2D2D2D;
display: flex;
align-items: center;
justify-content: space-between;
`;

const HeaderBotInner = styled.div`
padding: 15px 0;
display: flex;
align-items: center;
justify-content: space-between;
`;

const HeaderInfo = styled.div`
display: flex;
align-items: center;
gap: 22px;

`;

const HeaderConnect = styled.div`
display: flex;
align-items: center;
gap: 37px;
`;


const Social = styled.div`
display: flex;
align-items: center; 
gap: 22px;
`;

const VkLogo = styled.img`
`;

const TgLogo = styled.img`
`;

const PayInfo = styled.div`
display: flex;
align-items: center;
`;

const TitleTe = styled.div`
border-left: 1px solid #2D2D2D;
padding: 5px 0px 5px 15px;
gap: 15px;
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
letter-spacing: 0.03em;
color: #2D2D2D;

`;

const SubText = styled.div`
display: flex;
align-items: center;
padding-right:15px ;
margin-left: 5px;
font-family: 'Gotham Pro Regular', sans-serif;
font-weight: 700;
font-size: 14px;
line-height: 14px;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const LastPay = styled.div`
display: flex;

`;

const PayMonth = styled.div`
display: flex;
`;

const Abonem = styled.div`
display: flex;
`;

const Phone = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;

const Mail = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;

const IconPhone = styled.img`

`;

const PhoneNumber = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 14px;
text-align: right;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const MailBox = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 14px;
text-align: right;
letter-spacing: 0.03em;
color: #2D2D2D;
`;

const IconMail = styled.img`
`;


const MainLogo = styled.img`
`;



export default Header