import React from 'react';
import styled from 'styled-components/native';

const COntainer = styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  align-self: center;
  justify-content: flex-end;
`;

const ButtonContainer = styled.TouchableOpacity`
  box-shadow: 4px 4px 8px #999;
`;

const Icon = styled.Image``;

interface Props {
  onPress?: () => void;
}

const AddButton = ({onPress}: Props) => {
  return (
    <COntainer>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('../../../../Assets/Images/add.png')} />
      </ButtonContainer>
    </COntainer>
  );
};

export default AddButton;
