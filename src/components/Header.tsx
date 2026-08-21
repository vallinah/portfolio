import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (language: 'fr' | 'en') => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#accueil"
          onClick={closeMenu}
          className="font-heading text-xl font-bold text-slate-900 transition-colors duration-200 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        >
          Otisoa Vallinah
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#accueil"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {t('nav.home')}
          </a>

          <a
            href="#about"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {t('nav.about')}
          </a>

          <a
            href="#skills"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {t('nav.skills')}
          </a>

          <a
            href="#projects"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {t('nav.projects')}
          </a>

          <a
            href="#experience"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {t('nav.experience')}
          </a>

          <a
            href="#education"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {t('nav.education')}
          </a>

          <a
            href="#contact"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {t('nav.contact')}
          </a>

          {/* Sélecteur de langue desktop */}
          <div className="flex items-center gap-1 rounded-md border border-slate-200 p-1 dark:border-slate-700">
            <button
              type="button"
              onClick={() => changeLanguage('fr')}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                i18n.language === 'fr'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              🇫🇷 FR
            </button>

            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                i18n.language === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              🇬🇧 EN
            </button>
          </div>

          {/* Bouton thème desktop */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label={
              darkMode ? t('nav.lightTheme') : t('nav.darkTheme')
            }
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Actions mobiles */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Sélecteur de langue mobile */}
          <div className="flex items-center gap-1 rounded-md border border-slate-200 p-1 dark:border-slate-700">
            <button
              type="button"
              onClick={() => changeLanguage('fr')}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                i18n.language === 'fr'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              🇫🇷
            </button>

            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                i18n.language === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              🇬🇧
            </button>
          </div>

          {/* Bouton thème mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label={
              darkMode ? t('nav.lightTheme') : t('nav.darkTheme')
            }
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            <a
              href="#accueil"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {t('nav.home')}
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {t('nav.about')}
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {t('nav.skills')}
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {t('nav.projects')}
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {t('nav.experience')}
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {t('nav.education')}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;