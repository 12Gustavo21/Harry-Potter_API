import React from 'react';
import Header from './components/pages/Header/index';
import Main from './components/pages/Main/Index'
import Footer from './components/pages/footer/index';
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
