import styled from 'styled-components';
import Background from '../img/Background.jpg'

export const Header = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const Image = styled.img`
    width: 10%;
    height: 20vh;
`;

export const Box2 = styled.div``;