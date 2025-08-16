import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout/layout';
import About from './pages/About/about';
import Projects from './pages/projects/project';
import Certifications from './pages/certifications/certificate';
import Skills from './pages/skills/skill';
import Accadmics from './pages/accadmics/accadmic';
import Contact from './pages/Contact/contact';
import Home from './pages/Home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="skills" element={<Skills />} />
          <Route path="accadmics" element={<Accadmics />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
