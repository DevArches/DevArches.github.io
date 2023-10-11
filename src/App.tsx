import { Container } from '@mui/material';
import colors from './colors';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
const containerStyles = {
  backgroundColor: colors.background,
  height: '100vh',
  width: '100vw',
  maxWidth: '100vw',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

function App() {
  return (
    <>
      <Container sx={containerStyles}>
        <NavBar />
        <Intro />
      </Container>
      <Container sx={{ ...containerStyles, height: '50vh' }}>
        <AboutMe />
        <Projects />
      </Container>
    </>
  );
}

export default App;
