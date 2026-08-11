import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#accueil"
          onClick={closeMenu}
          className="font-heading text-xl font-bold text-slate-900 transition-colors duration-200 hover:text-blue-600"
        >
          Otisoa
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#accueil"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          >
            Accueil
          </a>

          <a
            href="#about"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          >
            À propos
          </a>

          <a
            href="#skills"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          >
            Compétences
          </a>

          <a
            href="#projects"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          >
            Projets
          </a>

          <a
            href="#experience"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          >
            Expériences
          </a>

          <a
            href="#education"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          >
            Formation
          </a>

          <a
            href="#contact"
            className="font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="bg-white md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            <a
              href="#accueil"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
            >
              Accueil
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
            >
              À propos
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
            >
              Compétences
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
            >
              Projets
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
            >
              Expériences
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
            >
              Formation
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full rounded-lg px-6 py-3 text-center font-sans text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
