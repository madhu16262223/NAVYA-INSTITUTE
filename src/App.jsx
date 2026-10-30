import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LanguageProvider } from './context/LanguageContext';
import { DemoModalProvider } from './context/DemoModalContext';
import { Home, About, Courses, Placements, Faculty, Certificates, Facilities, Gallery, Contact } from './pages/pages';
import { CourseDetail } from './pages/CourseDetail';
import { VerifyCertificate } from './pages/VerifyCertificate';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { NotFound } from './pages/NotFound';

// Pages are bundled eagerly: the whole app is small, and lazy chunks caused a visible
// loading flash on every navigation.
export default function App() {
  return (
    <LanguageProvider>
      <DemoModalProvider>
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
      </DemoModalProvider>
    </LanguageProvider>
  );
}
