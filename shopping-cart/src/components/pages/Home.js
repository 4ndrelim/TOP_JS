import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Background from '../elements/Background';
import homepageImage from '../../assets/images/homepage-image.png';
import Button from '../elements/Button';

const HomeWrapper = styled.div`
  display: flex;
  gap: 6rem;
  margin-top: 12rem;
  margin-bottom: 24rem;

  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50rem;
  min-width: 50rem;
  @media (max-width: 1100px) {
    align-items: center;
    width: 50rem;
  }
`;

const SmallMessage = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.grey.dark};
  font-weight: bold;
`;

const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;
  margin-bottom: 3rem;
  @media (max-width: 1100px) {
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 80rem;
  opacity: 0.85;
  @media (max-width: 1100px) {
    position: absolute;
    opacity: 0.3;
    z-index: -1;
  }
  @media (max-width: 600px) {
    max-width: 60rem;
  }
`;

function Home() {
  return (
    <HomeWrapper>
      <Background />
      <Message>
        <SmallMessage>Hottest Store In Town!</SmallMessage>
        <BigMessage>Life May Not Be Perfect but Your Outfit Can Be</BigMessage>
        <Link to="/products">
          <Button content="Shop Now" type="shopBtn" />
        </Link>
      </Message>
      <Image src={homepageImage} alt="people" />
    </HomeWrapper>
  );
}

export default Home;
