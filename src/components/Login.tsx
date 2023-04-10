import styled from 'styled-components';
import logo from '../img/big-logo.jpg';
import seepass from '../img/seepass.svg';

const Login = () => {
  return (
    <LoginWrap>
      <LoginInner>
        <LogoImg src={logo} />
        <FormContent>
            <Mail>
              <InfoTitle>
                Почта
              </InfoTitle>
              <UserMail type="text" placeholder='Введите почту' />
            </Mail>
            <Pass>
              <InfoTitle>
                Пароль
              </InfoTitle>
              <UserPass type="password" placeholder='Введите пароль'/>
            </Pass>
          <SignInBtn type='button'>
            Войти
          </SignInBtn>
        </FormContent>
      </LoginInner>
    </LoginWrap>
  )
}

const SeePass = styled.img`
`;


const UserPass = styled.input`
padding:13px 10px;
min-width: 380px;
min-height:40px;
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: rgba(45, 45, 45, 0.3);
background-color: #fff;
`;


const UserMail = styled.input`
padding:13px 10px;
min-width: 380px;
min-height:40px;
`;


const InfoTitle = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
color: #272727;
`;


const Mail = styled.div`
`;

const Pass = styled.div`
`;

const SignInBtn = styled.button`

`;

const FormContent = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`;


const LogoImg = styled.img`
`;


const LoginInner = styled.div`
min-height: 800px;
min-width: 600px;
background-color: #fff;
display: flex;

align-items: center;
flex-direction: column;
padding: 30px 50px;


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