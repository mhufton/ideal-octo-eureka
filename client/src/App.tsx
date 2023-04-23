import { AuthProvider } from './contexts/useAuth';
import { SummaryProvider } from './contexts/useSummary';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
import { ThemeProvider, useTheme } from './contexts/useTheme';

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  * {
    color: ${props => props.theme.textColor};
  }

  h1 {
    text-transform: uppercase;
    text-shadow: 2px 2px #d8d8d8;
    margin: 0 0 5px 0;
  }
`;

/** main component of whole application - houses all the contexts, private routes, and components */
function App() {
  const { theme } = useTheme();
  return (
    <AuthProvider>
      <SummaryProvider>
        <ThemeProvider theme={theme}>
          <CenterContainer>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<PrivateRoute />} />
              </Routes>
            </Router>
          </CenterContainer> 
        </ThemeProvider>
      </SummaryProvider>
    </AuthProvider>
  );
}

export default App;
