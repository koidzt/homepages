import { Suspense, createContext, useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { navMenu } from './config/menu.config';
import Fallback from './components/Fallback';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Suspense fallback={<Fallback />}>
            <Routes>
              {navMenu.map(({ name, path, component: PageComponent }) => (
                <Route key={`nav-${name}`} path={path} element={<PageComponent />} />
              ))}
              <Route path="*" element={<Navigate to={navMenu[0].path} replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
