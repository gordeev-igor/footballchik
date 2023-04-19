import artimg from '../img/article-img.jpg'
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { baseURL } from '../utils/constants';


interface TextArticleType {
  firstParagraph: string,
  secondParagraph: string
}

interface TitleArticleType {
  firstTitle: string,
  secondTitle: string
}

interface TrainArticleType {
  nameArticle: string,
  shortArticle: string,
  dateArticle: string,
  titleArticle: TitleArticleType,
  textArticle: TextArticleType
}


const ArtInfo = () => {

  const [articleContent, setArticleContent] = useState<TrainArticleType>();
  useEffect(() => {
    axios({
      method: 'get',
      url: baseURL + "informationArticle",
    })
      .then(response => {
        setArticleContent(response.data)
      });
  }, [])


  return (
    <ArtInner>
      <AtrTitile>
        {articleContent?.nameArticle}
      </AtrTitile>
      <ArtDate>
        {articleContent?.dateArticle}
      </ArtDate>
      <ArtImg src={artimg} />
      <Content>
        <ContentTitle>
          {articleContent?.titleArticle?.firstTitle}
        </ContentTitle>
        <ContentText>
          {articleContent?.textArticle?.firstParagraph}
        </ContentText>
        <ContentText>
          {articleContent?.textArticle?.secondParagraph}
        </ContentText>
        <ContentTitle>
          {articleContent?.titleArticle?.secondTitle}
        </ContentTitle>
        <ContentText>
          {articleContent?.textArticle?.firstParagraph}
        </ContentText>
        <ContentText>
          {articleContent?.textArticle?.firstParagraph}
        </ContentText>
      </Content>
    </ArtInner>

  );
};

const ContentText = styled.div`
font-family: 'Gotham Pro Regular', sans-serif;
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
font-family: 'Gotham Pro Regular', sans-serif;
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