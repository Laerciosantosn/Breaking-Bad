import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SubcontainerContainer = styled.div`
  position: relative;
  width: 100%;

  max-height: 800px;
  display: block;
  border: 2px solid red;

  background: url(http://images.virgula.com.br/2019/06/breaking-bad.jpg)
    no-repeat;

  background-size: 100%;

  padding: 0 25px;

  & p {
    width: 600px;
  }
`;

export const BodyContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  margin-bottom: 5%;
  margin-top: 20%;

  bottom: 0;

  h2 {
    font-size: 48px;
  }
`;
