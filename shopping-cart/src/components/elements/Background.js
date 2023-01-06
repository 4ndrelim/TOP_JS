import React from 'react';
import styled from 'styled-components';
import background from '../../assets/images/background.png';

function Background() {
  return <BackgroundWrapper src={background} alt="Background flowers" />;
}

const BackgroundWrapper = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -100;
`;

export default Background;
