import React from 'react';
import App from '../App';
import BlogSection from './BlogSection';
import BlogPost from './BlogPost';

interface RouterProps {
  path: string;
}

const Router: React.FC<RouterProps> = ({ path }) => {
  // Remove leading slash and split path
  const cleanPath = path.replace(/^\//, '');
  const pathSegments = cleanPath.split('/').filter(Boolean);

  // Route matching
  if (pathSegments.length === 0) {
    // Home page
    return <App />;
  }

  if (pathSegments[0] === 'blog') {
    if (pathSegments.length === 1) {
      // Blog listing page
      return (
        <div className="min-h-screen bg-background">
          <BlogSection />
        </div>
      );
    } else if (pathSegments.length === 2) {
      // Individual blog post
      return <BlogPost slug={pathSegments[1]} />;
    }
  }

  if (pathSegments[0] === 'privacy-policy' && pathSegments.length === 1) {
    // Privacy policy page
    const PrivacyPolicy = React.lazy(() => import('./PrivacyPolicy'));
    return (
      <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Загрузка...</div>}>
        <PrivacyPolicy />
      </React.Suspense>
    );
  }

  if (pathSegments[0] === 'privacy' && pathSegments.length === 1) {
    // Privacy policy short page
    const PrivacyPolicyShort = React.lazy(() => import('./PrivacyPolicyShort'));
    return (
      <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Загрузка...</div>}>
        <PrivacyPolicyShort />
      </React.Suspense>
    );
  }

  // 404 page
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
        <p className="text-secondary mb-8">Запрашиваемая страница не существует или была перемещена.</p>
        <a href="/" className="button-primary">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default Router;