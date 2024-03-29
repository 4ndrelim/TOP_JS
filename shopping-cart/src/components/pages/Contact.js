import React from 'react';
import styled from 'styled-components';
import {
  FaGithub, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import Background from '../elements/Background';

function Contact() {
  return (
    <ContactWrapper>
      <SocialMedia>
        <SocialLink href="https://github.com/4ndrelim" target="_blank">
          <FaGithub />
        </SocialLink>
        <SocialLink href="" target="_blank">
          <FaFacebookF />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/mynetwork/" target="_blank">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="" target="_blank">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/4ndre_lim/" target="_blank">
          <FaInstagram />
        </SocialLink>
      </SocialMedia>
      <Location>
        <p>NUS Computing</p>
        <p>13 Computing Dr, 117417</p>
      </Location>
      <Background />
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;
  /* hide footer */
  margin-bottom: 20rem;
  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10rem;
  font-size: 10rem;
  margin-bottom: 10rem;
  @media (max-width: 1000px) {
    gap: 8rem;
    font-size: 8rem;
  }
  @media (max-width: 650px) {
    gap: 5rem;
    font-size: 5rem;
`;

const Location = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 2.4rem;
`;

const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: ${({ theme }) => theme.colors.dark};
  &:hover {
    transform: scale(1.1);
`;

export default Contact;
