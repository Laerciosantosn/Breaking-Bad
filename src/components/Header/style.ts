import styled from 'styled-components';

export const Container = styled.div``;

export const HeaderSecondary = styled.div`
  position: relative;
  padding: 25px;
  width: 100%;
  display: none;
  padding: 16px 24px;

  background: #000;

  z-index: 2;

  & div.info {
    padding: 0px 8px 16px 0;

    & p {
      font-size: 16px;
    }
  }

  & div.container {
    display: flex;
    max-height: 460px;
  }

  & section.links {
    display: flex;
    flex-direction: column;
    padding: 16px 16px 0px 0;
    font-size: 20px;
    text-transform: uppercase;
    & a {
      line-height: 24px;
      margin-bottom: 20px;
    }
  }

  & div.episodes {
    padding: 16px 16px 0 16px;

    & img {
      max-width: 286px;
    }
  }

  &.visible {
    display: block;
    position: relative;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.25);
  }

  &.visible::before {
    content: '';
    border-style: solid;
    border-color: #000 transparent;
    border-width: 16px 16px 0 16px;
    bottom: -3%;

    position: absolute;
    z-index: 9;
  }
`;

export const SubcontainerContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  justify-items: center;

  background: url(https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_L.jpg)
    no-repeat;

  background-size: 100%;
`;

export const HeaderNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 22px 24px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent 100%);

  & a {
    z-index: 3;
    color: white;
    font-size: 32px;
  }

  & p {
    text-transform: uppercase;
    font-size: 16px;
  }
`;

export const HeaderLinks = styled.header`
  max-width: 1440px;
  padding: 0 24px;

  border: 1px solid blue;

  width: 100%;

  display: flex;
  align-self: center;
  flex-direction: column;

  & img {
    align-self: center;
    max-width: 180px;
    object-fit: cover;
  }

  & nav {
    align-self: center;

    margin-top: 6px;

    & a {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;

      padding: 0.33rem 0.8rem;

      position: relative;

      &.active {
        background: #006c38;
      }

      &.active::before {
        content: '';

        border-style: solid;
        border-color: #006c38 transparent;
        border-width: 0.375rem 0.375rem 0 0.375rem;
        top: 100%;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }
    }

    & a:hover {
      color: rgb(255, 255, 255, 0.5);
    }

    & a + a {
      margin-left: 1.5rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 1440px;

  padding: 24px;

  border: 1px red solid;

  display: flex;
  align-self: center;

  & div.description {
  }

  h2 {
    font-size: 48px;
  }

  p {
    max-width: 50%;
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
