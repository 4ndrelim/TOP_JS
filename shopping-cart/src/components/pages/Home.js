import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Background from '../elements/Background';
import homepageImage from '../../assets/images/homepage-image.png';
import Button from '../elements/Button';

const HomeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2%;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50rem;
  min-width: 50rem;
  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const SmallMessage = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.grey.dark};
`;

const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;
  margin-bottom: 3rem;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 80rem;
  opacity: 0.85;
  @media (max-width: 1000px) {
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
          <Button content="Shop Now" type="messageBtn" />
        </Link>
      </Message>
      <Image src={homepageImage} alt="people" />
    </HomeWrapper>
  );
}

export default Home;
