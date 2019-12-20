import styled from 'styled-components/native';

export const Card = styled.View`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
`;

export const Banner = styled.Image`
  align-self: center;
  height: 300px;
  width: 200px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const Button = styled.TouchableOpacity`
  background: #2193f6;
  border-radius: 4px;
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
`;

export const Amount = styled.View`
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const TextAmount = styled.Text`
  color: #fefefe;
  font-size: 20px;
`;
export const TextButton = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #fefefe;
`;
