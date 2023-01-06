import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 50px;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    };
`;

function Button({ content, type }) {
  return <ButtonWrapper type={type}>{content}</ButtonWrapper>;
}

export default Button;
