import { Link } from 'react-router-dom';
import { Seo } from '../components/ui';
import { Home, BookOpen } from 'lucide-react';

export function NotFound() {
  return (
    <>
      <Seo title="Page Not Found (404)" desc="The requested page could not be found." />
      <div className="section min-h-[60vh] flex items-center justify-center bg-mist/50">
        <div className="container-x max-w-lg text-center">
          <p className="text-7xl sm:text-8xl font-black text-[#0B5ED7]">404</p>
          <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            The page you are looking for might have been moved or does not exist. Let’s get you back on track to exploring computer courses at Navya Techno.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/" className="btn-primary">
              <Home size={18} aria-hidden="true" />
              Back to Home
            </Link>
            <Link to="/courses" className="btn-outline">
              <BookOpen size={18} aria-hidden="true" />
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
