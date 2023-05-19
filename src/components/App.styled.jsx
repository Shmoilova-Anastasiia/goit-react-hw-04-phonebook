import styled from '@emotion/styled'

export const Container = styled.div`
display:flex;
justify-content: center;

  padding: 100px 30px;
 margin: auto;
`;

export const Section = styled.section`
padding: 30px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;
 

export const TitleH2 = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold; 
`;