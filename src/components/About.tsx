function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 sm:scroll-mt-0 bg-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
          À propos de moi
        </h2>

        <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
          <p className="indent-6 font-sans text-sm leading-6 text-slate-600 sm:text-lg sm:leading-7">
            Je suis un développeur web passionné par la conception et le
            développement d'applications modernes.
          </p>

          <p className="indent-6 font-sans text-sm leading-6 text-slate-600 sm:text-lg sm:leading-7">
            J'aime particulièrement travailler sur des projets full-stack, en
            développant aussi bien le backend que le frontend.
          </p>

          <p className="indent-6 font-sans text-sm leading-6 text-slate-600 sm:text-lg sm:leading-7">
            Je cherche constamment à améliorer mes compétences et à découvrir
            de nouvelles technologies afin de construire des solutions
            efficaces et maintenables.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
