import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);
root.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
