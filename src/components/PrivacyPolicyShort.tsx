import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyShort: React.FC = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Политика конфиденциальности | Avi Reputation';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Политика конфиденциальности ИП Иванов Владимир Эдуардович. Порядок сбора, обработки и использования персональных данных на сайте avireputation.ru');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Политика конфиденциальности ИП Иванов Владимир Эдуардович. Порядок сбора, обработки и использования персональных данных на сайте avireputation.ru');
      document.head.appendChild(metaDescription);
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://www.avireputation.ru/privacy');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://www.avireputation.ru/privacy');
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Хлебные крошки">
          <ol className="flex items-center space-x-2 text-sm text-secondary">
            <li>
              <a href="/" className="hover:text-accent transition-colors">Главная</a>
            </li>
            <li className="flex items-center">
              <ArrowLeft className="w-4 h-4 mx-2 rotate-180" />
              <span className="text-primary font-medium">Политика конфиденциальности</span>
            </li>
          </ol>
        </nav>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <h1 className="section-headline mb-8">Политика конфиденциальности</h1>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-lg leading-relaxed">
              Настоящая Политика конфиденциальности регулирует обработку и использование персональных данных пользователями сайта https://www.avireputation.ru, индивидуальным предпринимателем Ивановым Владимиром Эдуардовичем, ИНН 673201613437, e-mail: ivanovladimir830@gmail.com.
            </p>
          </div>

          <h2>1. Какие данные собираем:</h2>
          <ul>
            <li>Имя, телефон, e-mail, город — при заполнении форм на сайте.</li>
            <li>Данные автоматически собираются через cookie, Яндекс.Метрику и др.</li>
          </ul>

          <h2>2. Зачем собираем:</h2>
          <ul>
            <li>Для обратной связи и оказания услуг.</li>
            <li>Для аналитики и улучшения работы сайта.</li>
            <li>Для отправки информационных материалов, если пользователь согласился.</li>
          </ul>

          <h2>3. Хранение и передача данных:</h2>
          <ul>
            <li>Данные хранятся на защищённых серверах.</li>
            <li>Не передаются третьим лицам без согласия, за исключением случаев, предусмотренных законом РФ.</li>
          </ul>

          <h2>4. Согласие:</h2>
          <p>Пользователь, оставляя данные на сайте, автоматически соглашается с настоящей политикой.</p>

          <h2>5. Контакты:</h2>
          <div className="bg-gray-50 rounded-2xl p-6 mt-4">
            <div className="space-y-2">
              <p><strong>ИП Иванов Владимир Эдуардович</strong></p>
              <p><strong>ИНН:</strong> 673201613437</p>
              <p><strong>Email:</strong> ivanovladimir830@gmail.com</p>
            </div>
          </div>
        </article>

        {/* Back to home button */}
        <div className="mt-16 text-center">
          <a href="/" className="button-primary">
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyShort;