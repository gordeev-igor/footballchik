import artimg from '../img/article-img.jpg'
import styled from 'styled-components';


export const information = {
  moreInfo: 'Информация',
  nameArt: 'Тренировки на улице',
  shortInfo: 'Данный способ поможет вам развить силу',
  date: '15 окт. 2021',
}

const ArtInfo = () => {

  return (
    <ArtInner>
      <AtrTitile>
        {information.nameArt}
      </AtrTitile>
      <ArtDate>
        {information.date}
      </ArtDate>
      <ArtImg src={artimg}/>
      <Content>
        <ContentTitle>
          РАЗМИНКА
        </ContentTitle>
        <ContentText>
          Рекламная акция без оглядки на авторитеты спонтанно стабилизирует рекламный макет. Изменение глобальной стратегии детерминирует продвигаемый инвестиционный продукт, опираясь на опыт западных коллег. Фокусировка откровенна. Правда, специалисты отмечают, что изменение глобальной стратегии многопланово индуцирует институциональный бюджет на размещение, размещаясь во всех медиа. Медиавес спонтанно индуцирует пул лояльных изданий, размещаясь во всех медиа. Повторный контакт, согласно Ф.Котлеру, допускает анализ зарубежного опыта.
        </ContentText>
        <ContentTitle>
          Ролевой медиамикс глазами современников
        </ContentTitle>
        <ContentText>
          Рекламная акция без оглядки на авторитеты спонтанно стабилизирует рекламный макет. Изменение глобальной стратегии детерминирует продвигаемый инвестиционный продукт, опираясь на опыт западных коллег. Фокусировка откровенна. Правда, специалисты отмечают, что изменение глобальной стратегии многопланово индуцирует институциональный бюджет на размещение, размещаясь во всех медиа. Медиавес спонтанно индуцирует пул лояльных изданий, размещаясь во всех медиа. Повторный контакт, согласно Ф.Котлеру, допускает анализ зарубежного опыта.
        </ContentText>
      </Content>
    </ArtInner>

  );
};

const ContentText = styled.div`
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: 0.03em;
color: #1D2130;
margin-bottom:40px;
`;

const ContentTitle = styled.div`
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 30px;
text-align: center;
letter-spacing: 0.05em;
color: #1D2130;
margin-bottom: 10px;
`;

const Content = styled.div`
`;

const ArtImg = styled.img`
margin-bottom:40px;
`;

const ArtDate = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #2D2D2D;
margin-bottom:40px;
`;

const AtrTitile = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 30px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #2D2D2D;
margin-bottom: 15px;
`;

const ArtInner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:column;
  max-width: 1220px;
  margin: 0 auto;
  width: calc(100% - 32px);
  padding: 0 17px ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:95px 0 75px;
`;

export default ArtInfo