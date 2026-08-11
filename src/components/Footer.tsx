function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="font-sans text-sm text-slate-600">
          © {new Date().getFullYear()} Otisoa Vallinah Andriamasinoro
        </p>

        <p className="font-sans text-sm text-slate-500">
          Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;