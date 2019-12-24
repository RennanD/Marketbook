import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #ebebeb;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Card = styled.View`
  background: #fefefe;
  padding: 20px;
  border-radius: 7px;
`;

export const Banner = styled.Image`
  align-self: center;
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 10px;
  font-weight: 600;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddButton = styled(RectButton)`
  background: #2193f6;
  border-radius: 5px;
  overflow: hidden;
  margin-top: auto;
  align-items: center;
  flex-direction: row;
`;

export const AmountView = styled.View`
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;

export const AmountText = styled.Text`
  color: #fefefe;
  margin-left: 5px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fefefe;
  font-size: 20px;
`;
