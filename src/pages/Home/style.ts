import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TopBar = styled.div`
  position: absolute;
  padding: 25px;
  width: 100%;
  max-height: 450px;

  z-index: 2;

  &.visible {
    position: relative;
    border-bottom: 0.5px solid white;

    max-height: 450px;
  }

  &.visible::before {
    content: '';
    border-style: solid;
    border-color: #000 transparent;
    border-width: 10px 10px 0 10px;
    bottom: -20%;

    position: absolute;
    z-index: 9;
  }
`;

export const SubcontainerContainer = styled.div`
  border: solid red 2px;
  position: relative;
  width: 100%;
  display: block;
  min-height: 1000px;
  top: 0%;

  background: url(https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_L.jpg)
    no-repeat;

  background-size: 100%;

  & div.HeadetNavigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 28px;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85),
      transparent 100%
    );

    & a {
      z-index: 3;
      color: white;
      font-size: 38px;
    }
    & p {
      text-transform: uppercase;
      font-size: 22px;
    }
  }
`;

export const BodyContainer = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;

  border: 1px solid blue;
`;

export const Description = styled.div`
  display: flex;
  max-width: 50%;
  /* position: absolute; */
  flex-direction: column;
  padding-bottom: 28px;

  bottom: 0;

  h2 {
    font-size: 48px;
  }

  p {
    font-size: 18px;
    margin-bottom: 28px;
  }
  h3 {
    padding: 10px 0;
    font-size: 22px;
  }
  h4 {
    width: 140px;
    text-transform: uppercase;
    font-size: 16px;
    border: 1px solid white;

    padding: 16px 12px;
  }
`;
