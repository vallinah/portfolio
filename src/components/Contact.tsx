import { Mail } from 'lucide-react';

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 sm:scroll-mt-0 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
          Contact
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-6 text-slate-600 sm:text-lg sm:leading-7">
          Vous avez un projet ou une opportunité à me proposer ? N&apos;hésitez
          pas à me contacter.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href="mailto:otisoavallinah@gmail.com"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-sans font-medium text-white transition-colors duration-200 hover:bg-blue-700 sm:w-auto"
          >
            <Mail size={20} />
            Email
          </a>

          <a
            href="https://github.com/vallinah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 font-sans font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 sm:w-auto"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vallinah-andriamasinoro-461948350/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 font-sans font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 sm:w-auto"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
