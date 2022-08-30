import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// css 
import './index.css'
import BookList from './BookList';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BookList />
  </StrictMode>,
);