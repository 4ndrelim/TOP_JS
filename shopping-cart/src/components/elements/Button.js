import React from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 50px;
    transition: transform 0.15s ease-in-out;
    &:hover {
        transform: scale(1.1);
    };

    /* SHOP BUTTON */
    ${(props) => props.type === 'shopBtn'
      && css`
        width: 39rem;
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.light};
        font-size: 4rem;
        font-weight: bold;
      `};

      /* ADDING BUTTON */
      ${(props) => props.type === 'addingBtn'
        && css`
          width: 100%;
          padding: 2rem;
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.dark};
          border-radius: 50px;
          font-weight: bold;
          transition: background-color 0.15s ease-in-out;
          &:hover {
            background-color: #D6D3CA;
            transform: scale(1);
          }
          &:active {
            background-color: #24ddb1;
            transition: background-color 0.05s ease-in-out;
          }
        `};

  /* CLOSE BUTTON */
  ${(props) => props.type === 'close'
  && css`
      width: 100%;
      padding: 1rem;
      border-radius: 0px;
      background-color: #ff9999;
      color: ${({ theme }) => theme.colors.dark};
      font-weight: bold;
      transition: background-color 0.15s ease-in-out;
      &:hover {
        background-color: #ee8888;
        transform: scale(1);
      }
      &:active {
        background-color: #dd7777;
        transition: background-color 0.05s ease-in-out;
      }
    `}

    /* AMOUNT CHANGER */
    ${(props) => ((props.type === 'increment') || (props.type === 'decrement'))
      && css`
      padding: 1rem;
      border-radius: 0px;
      background-color: ${({ theme }) => theme.colors.grey.main};
      color: ${({ theme }) => theme.colors.dark};
      transition: background-color 0.15s ease-in-out;
      &:hover {
        background-color: #d4d4d4;
        transform: scale(1);
      }
      &:active {
        background-color: #c3c3c3;
        transition: background-color 0.05s ease-in-out;
      }
    `}
`;

function Button({ content, type }) {
  return <ButtonWrapper type={type}>{content}</ButtonWrapper>;
}

export default Button;
