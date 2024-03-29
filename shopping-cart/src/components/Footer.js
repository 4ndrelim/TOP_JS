import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <FooterWrapper>
      Cloned @
      michalosman
      {' '}
      {new Date().getFullYear()}
      {' '}
      <GithubLink href="https://github.com/michalosman" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 1rem;
  text-align: center;
  `;

const GithubLink = styled.a`
  margin-left: 1.5rem;
  display: flex;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 3rem;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.4);
  }
`;

export default Footer;
