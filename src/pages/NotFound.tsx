import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <p className="font-heading text-7xl font-bold text-blue-600 sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
          {t('notFound.title')}
        </h1>

        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-6 text-slate-600 sm:text-base">
          {t('notFound.description')}
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
        >
          <ArrowLeft size={17} />
          {t('notFound.backHome')}
        </Link>
      </div>
    </main>
  );
}

export default NotFound;