import React from 'react';
import styled from 'styled-components';
import background from '../../assets/background.png';

function Background() {
  return <BackgroundWrapper src={background} alt="Background flowers" />;
}

const BackgroundWrapper = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
`;

export default Background;
