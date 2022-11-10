import * as React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image'
import styled from 'styled-components'
import banner from 'images/banner.png'

const StyledContainer = styled(Container)`
width: 100vw;
padding: 0px;
margin: 0px;
display: contents;
`;

export default function Banner(props){
  
  return (
    <StyledContainer>
      <Image src={banner} alt="banner" layout="responsive" />
    </StyledContainer>
  );
}