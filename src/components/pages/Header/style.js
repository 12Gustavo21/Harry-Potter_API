import styled from "styled-components";
import Background from "../../img/Background.jpg";

export const Header = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: #ffffff10;
    backdrop-filter: blur(5px);
`;

export const Image = styled.img`
    width: 10%;
    height: 20vh;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    font-family: 'Henny Penny', cursive;
`;

export const DIV = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`;

export const List = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-family: 'Cinzel', serif;

    li {
        transition: 1s all;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const A = styled.a`
    font-size: 1.2em;
    text-decoration: none;
    color: #000;
    transition: 1s all;
    filter: drop-shadow(10px 10px 10px #fff);
    font-weight: 500;

    &:hover {
        transform: scale(1.1);
        font-weight: 900;
    }
`;

export const Box2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Henny Penny', cursive;
    width: 100%;
    height: 30vh;
`;

export const PlayTitle = styled.h1`
    font-size: 2em;
    margin: 10px;
`;

export const Buttons = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.button`
    width: 7em;
    height: 2em;
    font-size: 1.1em;
    font-family: 'Cinzel', serif;
    background: #ccc;
    border: 1px solid #000;
    border-radius: 20px;
    transition: 1s all;
    font-weight: bold;

    &:hover {
        transform: scale(1.1);
        background: #000;
        color: #ccc;
    }
`;