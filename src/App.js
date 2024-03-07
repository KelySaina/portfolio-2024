import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import MyProjectsPage from './pages/MyProjectsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/my-projects" element={<MyProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

