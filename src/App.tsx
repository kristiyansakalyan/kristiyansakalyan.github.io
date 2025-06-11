import React from 'react';
import { MatrixRainingLetters } from "react-mdr";
import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Header from './pages/Header';
import Publications from './pages/Publications';
import Research from './pages/Research';
import Work from './pages/Work';

const App = () => {

  const [visibleMain, setVisbleMain] = React.useState(false);
  const [visibleMatrix, setVisibleMatrix] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setVisbleMain(true);
    }, 3000); // 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleMatrix(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: visibleMatrix ? 1 : 0.1,
          transition: 'opacity 2s ease',
        }}
      >
        <MatrixRainingLetters />
      </div>
      <div
        className="main-page"
        style={{
          opacity: visibleMain ? 1 : 0,
          transition: 'opacity 2s ease',
          position: 'relative',
          zIndex: 1,
        }}>
        <Navbar />
        <Header />
        <About />
        <Publications />
        <Education />
        <Research />
        <Work />
      </div>
    </div>
  )
}

export default App