import styled from 'styled-components';
import logo from '../img/big-logo.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginWrap>
      <LoginInner>
        <Link to='/footballer'>
          <LogoImg src={logo} />
        </Link>
        <FormContent>
          <Mail>
            <InfoTitle>
              Почта
            </InfoTitle>
            <UserMail required type="email" placeholder='Введите почту' />
          </Mail>
          <Pass>
            <InfoTitle>
              Пароль
            </InfoTitle>
            <UserPass required type="password" placeholder='Введите пароль' />
          </Pass>
          <SignInBtn type='submit'>
            Войти
          </SignInBtn>
        </FormContent>
      </LoginInner>
    </LoginWrap>
  )
}




const UserPass = styled.input`
padding:13px 10px;
min-width: 380px;
min-height:40px;
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 14px;
color: rgba(45, 45, 45, 0.3);
background-color: rgba(37, 186, 0, 0.1);
border:none;
`;


const UserMail = styled.input`
padding:13px 10px;
min-width: 380px;
min-height:40px;
padding:13px 10px;
min-width: 380px;
min-height:40px;
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 14px;
color: rgba(45, 45, 45, 0.3);
background-color: #fff;
background-color: rgba(37, 186, 0, 0.1);
border:none;
`;


const InfoTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 14px;
color: #272727;
margin-bottom:5px;
`;


const Mail = styled.div`
`;

const Pass = styled.div`
`;

const SignInBtn = styled.button`
padding:18px 75px;
background-color: #25BA00;
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
letter-spacing: 0.03em;
color: #FFFFFF;
border: none;
cursor:pointer;
`;

const FormContent = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
gap:30px;
`;


const LogoImg = styled.img`
`;


const LoginInner = styled.div`
height: fit-content;
width: fit-content;
background-color: #fff;
display: flex;
align-items: center;
flex-direction: column;
padding: 30px 50px;
gap: 50px;
box-shadow: 10px #000000;
box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;

const LoginWrap = styled.div`
min-height: 100vh;
min-width:100%;
background-color: rgba(37, 186, 0, 0.1);
display: flex;
justify-content: center;
align-items:center;
`;


export default Login