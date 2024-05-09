import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.jsx'
import { Header } from './components/header/index.jsx';

import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
