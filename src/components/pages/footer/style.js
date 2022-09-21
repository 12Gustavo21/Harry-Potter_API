import styled from "styled-components";
import Background from "../../img/BackgroundFooter.jpg"

export const Footer = styled.footer`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const A = styled.a`
    text-decoration: none;
    color: #fff;
    padding: 10px;
    filter: drop-shadow(10px 10px 10px #000);
    transition: 1s all;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Farewell = styled.h1`
    font-size: 3em;
    color: #fff;
    font-family: 'Harry Potter', sans-serif;                                              
    text-shadow: 10px 10px 10px #000;
`;

export const IMG = styled.img`
    width: 100%;
    height: 60vh;
    padding-right: 20px;
`;