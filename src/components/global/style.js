import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        scroll-behavior: smooth;
        cursor: url('https://www.cursor.cc/cursor/771/167/cursor.png'), auto !important;

        ::-webkit-scrollbar {
            background: #000;
            width: 7px;
        }

        ::-webkit-scrollbar-thumb {
            background: #cccccc20;
            border: 1px solid #ccc;
            border-radius: 50px;
        }
    }
`;