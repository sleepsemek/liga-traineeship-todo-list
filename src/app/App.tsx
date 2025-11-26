import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { store } from '../store';
import { theme } from '../theme';
import { Router } from '../routes/';
import { PageContainer } from 'src/pages/PageContainer';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageContainer>
          <Router />
        </PageContainer>
      </ThemeProvider>
    </Provider>
  );
}
