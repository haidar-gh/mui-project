import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from './lib/theme.ts'
import RTL from './components-mui/RTL.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { store, persistStor } from '../src/app/store.ts'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RTL>
          <CssBaseline />
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistStor}>
              <App />
            </PersistGate>
          </Provider>
        </RTL>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
