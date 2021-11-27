import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from '@/App';

const queryclient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Global styles={css`
      ${emotionReset}`}
    />
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
