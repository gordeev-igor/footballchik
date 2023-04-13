import artimg from '../img/article-img.jpg'
import styled from 'styled-components';


export const information = {
  moreInfo: 'Информация',
  nameArt: 'Тренировки на улице',
  shortInfo: 'Данный способ поможет вам развить силу',
  dateInfo: '15 окт. 2021',
}

const ArtInfo = () => {

  return (
    <ArtInner>
      <AtrTitile>
        {information.nameArt}
      </AtrTitile>
      <ArtDate>
        {information.dateInfo}
      </ArtDate>
      <ArtImg src={artimg} />
      <Content>
        <ContentTitle>
          РАЗМИНКА
        </ContentTitle>
        <ContentText>
          Рекламная акция без оглядки на авторитеты спонтанно стабилизирует рекламный макет. Изменение глобальной стратегии детерминирует продвигаемый инвестиционный продукт, опираясь на опыт западных коллег. Фокусировка откровенна. Правда, специалисты отмечают, что изменение глобальной стратегии многопланово индуцирует институциональный бюджет на размещение, размещаясь во всех медиа. Медиавес спонтанно индуцирует пул лояльных изданий, размещаясь во всех медиа. Повторный контакт, согласно Ф.Котлеру, допускает анализ зарубежного опыта.
        </ContentText>
        <ContentText>
          Таргетирование переворачивает ролевой стиль менеджмента, отвоевывая свою долю рынка. Отсюда естественно следует, что маркетингово-ориентированное издание деятельно концентрирует сублимированный сегмент рынка. Создание приверженного покупателя, анализируя результаты рекламной кампании, охватывает ролевой продукт. Построение бренда, согласно Ф.Котлеру, индуцирует конвергентный потребительский рынок. Восприятие марки определяет фирменный рекламный клаттер.        </ContentText>
        <ContentTitle>
          Ролевой медиамикс глазами современников
        </ContentTitle>
        <ContentText>
          Рекламная акция без оглядки на авторитеты спонтанно стабилизирует рекламный макет. Изменение глобальной стратегии детерминирует продвигаемый инвестиционный продукт, опираясь на опыт западных коллег. Фокусировка откровенна. Правда, специалисты отмечают, что изменение глобальной стратегии многопланово индуцирует институциональный бюджет на размещение, размещаясь во всех медиа. Медиавес спонтанно индуцирует пул лояльных изданий, размещаясь во всех медиа. Повторный контакт, согласно Ф.Котлеру, допускает анализ зарубежного опыта.
        </ContentText>
        <ContentText>
          Таргетирование переворачивает ролевой стиль менеджмента, отвоевывая свою долю рынка. Отсюда естественно следует, что маркетингово-ориентированное издание деятельно концентрирует сублимированный сегмент рынка. Создание приверженного покупателя, анализируя результаты рекламной кампании, охватывает ролевой продукт. Построение бренда, согласно Ф.Котлеру, индуцирует конвергентный потребительский рынок. Восприятие марки определяет фирменный рекламный клаттер.        </ContentText>
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
margin-bottom:20px;
width:800px;

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
margin: 40px 0 10px;
display: flex;
justify-content: center;
align-content: center;
width:600px;
`;

const Content = styled.div`
display: flex;
align-items:center;
flex-direction: column;
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
  padding:95px 0 75px;
  align-items:center;
`;

export default ArtInfo