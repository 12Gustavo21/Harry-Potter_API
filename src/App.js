import React from 'react';
import Header from './components/header/index';
import Home from './components/pages/Home/Index';
import Footer from './components/footer/index';
import { GlobalStyle } from './components/global/style';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
