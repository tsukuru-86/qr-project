import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4081', // ブランドカラー
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans JP", sans-serif',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);