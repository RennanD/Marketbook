import styled from 'styled-components/native';

export const Container = styled.View`
    background: #2193f6;
    height: 100px;
    align-items: baseline;
    justify-content: space-between;
    padding: 30px;
    flex-direction: row;
`;

export const Logo = styled.Image``;

export const NavigateButton = styled.TouchableOpacity`
    position: relative;
`;

export const Badge = styled.View`
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 2px 7px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #fa3e3e;
    border: 1px solid #2193f6;
`;

export const BadgeNumber = styled.Text`
    color: #fefefe;
`;
