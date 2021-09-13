import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.Fragment>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
