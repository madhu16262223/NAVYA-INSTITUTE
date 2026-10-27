import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LanguageProvider } from './context/LanguageContext';
import { DemoModalProvider } from './context/DemoModalContext';

// Route-level code splitting with React.lazy
const Home = lazy(() => import('./pages/pages').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/pages').then((m) => ({ default: m.About })));
const Courses = lazy(() => import('./pages/pages').then((m) => ({ default: m.Courses })));
const CourseDetail = lazy(() => import('./pages/CourseDetail').then((m) => ({ default: m.CourseDetail })));
const Placements = lazy(() => import('./pages/pages').then((m) => ({ default: m.Placements })));
const Faculty = lazy(() => import('./pages/pages').then((m) => ({ default: m.Faculty })));
const Certificates = lazy(() => import('./pages/pages').then((m) => ({ default: m.Certificates })));
const Facilities = lazy(() => import('./pages/pages').then((m) => ({ default: m.Facilities })));
const Gallery = lazy(() => import('./pages/pages').then((m) => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/pages').then((m) => ({ default: m.Contact })));
const VerifyCertificate = lazy(() => import('./pages/VerifyCertificate').then((m) => ({ default: m.VerifyCertificate })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#0B5ED7]" />
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <DemoModalProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:id" element={<CourseDetail />} />
              <Route path="placements" element={<Placements />} />
              <Route path="faculty" element={<Faculty />} />
              <Route path="certificates" element={<Certificates />} />
              <Route path="verify-certificate" element={<VerifyCertificate />} />
              <Route path="facilities" element={<Facilities />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </DemoModalProvider>
    </LanguageProvider>
  );
}
