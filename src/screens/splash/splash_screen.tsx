import LayoutComponent from 'component/layout/layout_component';
import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';

const ImageStyled = styled(Image)`
  width: 207px;
  height: 56px;
  resize-mode: cover;
`;
const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function SplashScreen() {
  return (
    <LayoutComponent isWithoutScroll>
      <Container>
        <ImageStyled source={require('assets/images/logos_netflix.png')} />
      </Container>
    </LayoutComponent>
  );
}
