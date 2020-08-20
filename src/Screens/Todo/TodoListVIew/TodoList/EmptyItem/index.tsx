import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text``;

const EmptyItem = () => {
  return (
    <Container>
      <Label>하단에 "+" 버튼을 눌러 새로운 할 일을 등록해보자.</Label>
    </Container>
  );
};

export default EmptyItem;
