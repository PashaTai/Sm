import React from 'react';
import { Mail, Phone } from 'lucide-react';
import logo from '../images/Logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d1d1f] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 - Logo and Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="Avi Reputation Logo" 
                  className="w-auto brightness-0 invert transition-all duration-300"
                  style={{
                    height: '4rem', // Base size using golden ratio
                    '@media (min-width: 640px)': {
                      height: '5rem',
                    },
                    '@media (min-width: 768px)': {
                      height: '6rem',
                    },
                    '@media (min-width: 1024px)': {
                      height: '7rem',
                    }
                  }}
                />
              </div>
              <p className="text-[#86868b] mb-8">
                Улучшаем вашу репутацию в интернете — честно, эффективно и с гарантией
              </p>
              <p className="text-[#86868b] text-sm">
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  Политика обработки персональных данных
                </a>
              </p>
              <p className="text-[#86868b] text-sm">
                <a href="/privacy" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </p>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Услуги</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-[#86868b] hover:text-white transition-colors">
                    Управление репутацией
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#86868b] hover:text-white transition-colors">
                    Размещение отзывов
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#86868b] hover:text-white transition-colors">
                    Удаление негатива
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#86868b] hover:text-white transition-colors">
                    Международное продвижение
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contacts */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Контакты</h3>
              <div className="space-y-4">
                <a href="tel:+79203069659" className="flex items-center text-[#86868b] hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  +7 920 306 96 59
                </a>
                <a href="mailto:Ivanovladimir830@gmail.com" className="flex items-center text-[#86868b] hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  Ivanovladimir830@gmail.com
                </a>
                <div className="flex gap-4 mt-6">
                  <a 
                    href="https://vk.com/id763257970" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#86868b] hover:text-white transition-colors"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" alt="VK" className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://t.me/vladimir_lvanovv" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#86868b] hover:text-white transition-colors"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;