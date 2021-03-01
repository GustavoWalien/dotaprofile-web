import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
      <Navbar />
      <Footer />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
