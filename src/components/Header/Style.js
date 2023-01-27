import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 25px;
  margin-bottom: 5px;
  border-bottom: 1px solid #45a4f7;

  img {
    width: 60px;
  }

  .btn-invisible {
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: none;
    background-color: transparent;
  }

  button {
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: none;
    border: 1px solid #45a4f7;

    background-color: transparent;
    transition: background-color 0.5s;

    img {
      width: 32px;
      transition: transform 0.2s;

      :hover {
        transform: scale(0.8);
      }
    }

    :hover {
      cursor: pointer;
      background-color: rgba(69, 164, 247, 0.2);
    }
  }
`;
