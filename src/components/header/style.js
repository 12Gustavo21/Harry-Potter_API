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

export const Title = styled.h1`
    font-size: 2.5em;
    font-family: 'Henny Penny', cursive;
`;

export const List = styled.ul`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Cinzel', serif;
`;

export const A = styled.a`
    font-size: 1.2em;
    text-decoration: none;
    color: #000;
    transition: 1s all;

    &:hover {
        transform: scale(1.1);
        font-weight: bold;
    }
`;

export const Box2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Cinzel', serif;
`;