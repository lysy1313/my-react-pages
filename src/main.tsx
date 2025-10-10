import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles.tsx'
// import { myTheme } from './styles/Theme.styled';
// import { GlobalStyles } from './styles/GlobalStyles.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
)
