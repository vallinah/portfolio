function Hero() {
  return (
    <section
      id="accueil"
      className="scroll-mt-20 sm:scroll-mt-0 flex min-h-screen items-center bg-slate-50 px-4 pt-24 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="font-sans text-base font-medium text-blue-600 sm:text-lg">
          Bonjour, je suis
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Otisoa Vallinah Andriamasinoro
        </h1>

        <h2 className="mt-4 font-heading text-xl font-semibold text-slate-700 sm:text-3xl">
          Développeur <span className="text-blue-600">Full-Stack</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-7">
          De l’idée à la réalisation, je vous accompagne dans l’étude, la
          conception et le développement de vos solutions numériques.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-sans font-medium text-white transition-colors duration-200 hover:bg-blue-700 sm:w-auto"
          >
            Voir mes projets
          </a>

          <a
            href="/cv.pdf"
            download
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border border-blue-600 bg-white px-6 py-3 font-sans font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-50 sm:w-auto"
          >
            Télécharger mon CV
          </a>

          <a
            href="#contact"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 font-sans font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 sm:w-auto"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
