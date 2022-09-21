import styled from "styled-components";

export const Main = styled.main`
    background-color: #000;
    color: #000;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Cinzel', serif;
`;

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Henny Penny', cursive;
    color: #fff;
    margin-top: 20px;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 10px;
    border: 2px solid #000;
    background-color: #fff;
    max-width: 100%;
    max-height: 70vh;
    padding: 10px;
    border-radius: 40px;
`;

export const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    font-family: 'Henny Penny', cursive;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 35vh;
    transition: 1s all;
    border-radius: 10px;
    margin: 10px;
    &:hover {
        transform: scale(.9);
        filter: drop-shadow(10px 10px 10px #000);
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const information = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;

