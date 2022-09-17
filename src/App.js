import React from 'react';
import Header from './components/header/index';
import Main from './components/main/index';
import Footer from './components/footer/index';
import { GlobalStyle } from './components/global/style';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
