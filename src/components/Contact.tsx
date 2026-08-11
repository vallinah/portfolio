import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

function Contact() {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const checkForPendingMessage = () => {
      const messagePending = sessionStorage.getItem(
        'contactMessagePending',
      );

      if (messagePending === 'true') {
        setSuccessMessage(
          'Si votre message a bien été envoyé, il sera pris en compte. Merci !',
        );

        sessionStorage.removeItem('contactMessagePending');

        window.setTimeout(() => {
          setSuccessMessage('');
        }, 8000);
      }
    };

    // Vérifie au chargement de la page
    checkForPendingMessage();

    // Vérifie lorsque le navigateur redonne le focus à la page
    window.addEventListener('focus', checkForPendingMessage);

    // Vérifie lorsque la page est restaurée
    window.addEventListener('pageshow', checkForPendingMessage);

    // Vérifie lorsque la page redevient visible
    document.addEventListener(
      'visibilitychange',
      checkForPendingMessage,
    );

    return () => {
      window.removeEventListener('focus', checkForPendingMessage);
      window.removeEventListener('pageshow', checkForPendingMessage);
      document.removeEventListener(
        'visibilitychange',
        checkForPendingMessage,
      );
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!name) {
      newErrors.name = 'Veuillez renseigner votre nom.';
    }

    if (!email) {
      newErrors.email = 'Veuillez renseigner votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Veuillez renseigner une adresse email valide.';
    }

    if (!message) {
      newErrors.message = 'Veuillez renseigner votre message.';
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    const subject = `Message depuis mon portfolio - ${name}`;

    const body = `Nom : ${name}
Email : ${email}

Message :
${message}`;

    // On mémorise que l'utilisateur a lancé un envoi
    sessionStorage.setItem('contactMessagePending', 'true');

    // Ouverture de l'application de messagerie
    window.location.href = `mailto:otisoavallinah@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-slate-950 sm:scroll-mt-0 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Contact
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-7">
            Vous avez un projet ou une opportunité à me proposer ? N&apos;hésitez
            pas à me contacter.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:mt-10 sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Nom
              </label>

              <input
                id="name"
                name="name"
                type="text"
                className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 font-sans text-sm text-slate-900 outline-none transition-colors duration-200 dark:bg-slate-950 dark:text-white ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-slate-200 focus:border-blue-600 dark:border-slate-700 dark:focus:border-blue-400'
                }`}
                placeholder="Votre nom"
              />

              {errors.name && (
                <p className="mt-2 font-sans text-sm text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 font-sans text-sm text-slate-900 outline-none transition-colors duration-200 dark:bg-slate-950 dark:text-white ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-slate-200 focus:border-blue-600 dark:border-slate-700 dark:focus:border-blue-400'
                }`}
                placeholder="votre@email.com"
              />

              {errors.email && (
                <p className="mt-2 font-sans text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                className={`mt-2 w-full resize-none rounded-lg border bg-white px-4 py-3 font-sans text-sm text-slate-900 outline-none transition-colors duration-200 dark:bg-slate-950 dark:text-white ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-slate-200 focus:border-blue-600 dark:border-slate-700 dark:focus:border-blue-400'
                }`}
                placeholder="Votre message..."
              />

              {errors.message && (
                <p className="mt-2 font-sans text-sm text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-sans font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              <Mail size={20} />
              Envoyer le message
            </button>
          </div>
        </form>

        {successMessage && (
          <p
            role="status"
            className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center font-sans text-sm text-green-700 dark:border-green-900 dark:bg-green-950/30 dark:text-green-400"
          >
            ✓ {successMessage}
          </p>
        )}

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="mailto:otisoavallinah@gmail.com"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 font-sans font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:w-auto"
          >
            <Mail size={20} />
            Email
          </a>

          <a
            href="https://github.com/vallinah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 font-sans font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:w-auto"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vallinah-andriamasinoro-461948350/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 font-sans font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:w-auto"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
