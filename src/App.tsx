import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;

    document.title = t('seo.title');

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('seo.description'));

    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', t('seo.title'));

    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t('seo.description'));

    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute(
        'content',
        i18n.language === 'en' ? 'en_US' : 'fr_FR',
      );
  }, [i18n.language, t]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
