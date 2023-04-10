import react from 'react';
import styled from 'styled-components';
import Container from './Container';


const Mystats = () => {

  return (
    <ContainerResult>

    </ContainerResult>
  );
};

const ContainerResult = styled.div`
  border-bottom: solid 1px #25BA00;
  max-width: 1220px;
  margin: 0 auto;
  width: calc(100% - 32px);
  padding: 0 17px ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



export default Mystats