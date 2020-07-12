import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  /* position: relative; */
`;

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  & img {
    max-width: 150px;
    max-height: 100px;
    object-fit: cover;
  }

  & nav {
    width: 100%;
    display: flex;
    justify-content: center;

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
