import styled from 'styled-components';
import revmain from '../img/rev-main.svg'
import tgrev from '../img/tg-rev.svg'
import vkbig from '../img/vkbig.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <FooterInner>
        <FooterInfo>
          <MainLogo src={revmain} />
          <InfoText>
            Dempor pede libero dapi useu class venenatis ut bibendum quam ut nibh necm. NonhonPede mollis vel vitae dorpis Sed odio ultrices id, est eu mauris.
          </InfoText>
        </FooterInfo>
        <FooterSocial>
          <FollowUs>
            Подписывайтесь на нас
          </FollowUs>
          <SocialLink>
            <Link to='#'>
              <VkLogo src={vkbig} />
            </Link>
            <Link to='#'>
              <TgLogoRev src={tgrev} />
            </Link>
          </SocialLink>
        </FooterSocial>
      </FooterInner>
    </>
  )
}

const TgLogoRev = styled.img`
`;

const VkLogo = styled.img`
`;

const SocialLink = styled.div`
display: flex;
justify-content: flex-end;
gap: 32px;
`;

const FollowUs = styled.div`
padding-bottom:20px;
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 18px;
text-align: right;
letter-spacing: 0.05em;
color: #FFFFFF;
`;

const FooterSocial = styled.div`
`;

const InfoText = styled.p`
width: 400px;
height: 100px;
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
letter-spacing: 0.05em;
color: #FFFFFF;
`;

const MainLogo = styled.img`
`;

const FooterInfo = styled.div`
display: flex;
gap: 90px;
`;

const FooterInner = styled.div`
padding: 30px 135px;
height: fit-content;
background-color: #2D2D2D;
display: flex;
justify-content: space-between;
margin-top: 20px;
`;

export default Footer