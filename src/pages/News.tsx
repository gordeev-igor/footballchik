import styled from 'styled-components';
import { useState, useEffect } from 'react'
import axios from 'axios';
import ScaleLoader from "react-spinners/ScaleLoader";
import kachok from '../img/kachok.jpg'

const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test"

interface IArticles  {
  id: string,
  type: string,
  sectionId: string,
  sectionName: string,
  webPublicationDate: string,
  webTitle: string,
  webUrl: string,
  apiUrl: string,
  isHosted: boolean,
  pillarId: string,
  pillarName: string,
}

const News = () => {

  const [articles, setArticles] = useState<Array<IArticles>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    axios
      .get(src)
      .then(data => {
        setArticles(data.data.response.results);
        setLoading(false)
      })
  }, [])
  return (
    <>
      {
        loading ?
          <LoadStyle>
            <ScaleLoader
              color={'#2fa161'}
              loading={loading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoadStyle>
          :
          <NewsInner>
            {articles.slice(4, 8).map(article => {
              return (
                <Stronger>
                  <StrongerNews>
                    <MainInfo>
                      <NewsInfo href={article.webUrl}>
                        {article.sectionName}
                      </NewsInfo>
                      <NewsTitle>
                        {article.webTitle}
                      </NewsTitle>
                      <NewsSub>
                        {article.pillarName}
                      </NewsSub>
                    </MainInfo>
                    <NewsDate>
                      {article.webPublicationDate}
                    </NewsDate>
                  </StrongerNews>
                  <StrongerImage src={kachok} />
                </Stronger>
              );
            })}     
          </NewsInner>
      }
    </>
  )
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
display: inline-block;
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
font-family: 'Gotham Pro';
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
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.03em;
color: #FFFFFF;
padding: 2px 0 0 ;
border-top: 1px solid #25BA00;
width: fit-content;
`;

const StrongerImage = styled.img`
width:50%;
`;

const NewsDate = styled.div`
font-family: 'Gotham Pro';
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


export default News 