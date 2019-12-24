import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 15px;
  background: #ebebeb;
  flex: 1;
`;

export const Content = styled.View`
  background: #fefefe;
  padding: 20px;
  border-radius: 7px;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Item = styled.View`
  margin-bottom: 20px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.View``;

export const Banner = styled.Image`
  height: 70px;
  width: 70px;
  margin-right: 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-size: 21;
  color: #333;
  font-weight: bold;
`;

export const Footer = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  margin-top: 15px;
  border-radius: 7px;
`;

export const AmountView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  border: 1px solid #ddd;
  padding: 7px;
  width: 70px;
  background: #fefefe;
  margin: 0 10px;
  font-size: 17px;
`;

export const Subtotal = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 18px;
`;

export const TotatView = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const TotalText = styled.Text`
  color: #666;
  font-size: 22px;
`;

export const TotalPrice = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 28px;
`;

export const FinishButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #2193f6;
  border-radius: 7px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: #fefefe;
  font-size: 18px;
  font-weight: bold;
`;
