import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useForm } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xanokwnn");
  const [formData, setFormData] = useState({
    name: '',
    contacts: '',
    companyName: '',
    platforms: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-headline mb-6">Спасибо за заявку!</h2>
          <p className="section-subheadline mb-8">
            Мы свяжемся с вами в ближайшее время.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="button-primary inline-flex items-center justify-center gap-2"
          >
            Отправить еще одну заявку
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-headline text-center mb-6">Оставить заявку</h2>
        <p className="section-subheadline text-center mb-12">
          Заполните форму, и мы свяжемся с вами для обсуждения деталей
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="contacts" className="block text-sm font-medium mb-2">
              Контакты (телефон/e-mail, мессенджер)
            </label>
            <input
              type="text"
              id="contacts"
              name="contacts"
              value={formData.contacts}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium mb-2">
              Название компании
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="platforms" className="block text-sm font-medium mb-2">
              На каких площадках требуется работа
            </label>
            <input
              type="text"
              id="platforms"
              name="platforms"
              value={formData.platforms}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
              Дополнительная информация
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className="input-field"
            ></textarea>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyConsent"
              name="privacyConsent"
              defaultChecked={true}
              className="mt-1 w-5 h-5 text-accent bg-gray-100 border-gray-300 rounded focus:ring-accent focus:ring-2"
              required
            />
            <label htmlFor="privacyConsent" className="text-sm text-secondary leading-relaxed">
              Я согласен с условиями обработки персональных данных
            </label>
          </div>

          <button 
            type="submit" 
            disabled={state.submitting}
            className={`button-primary w-full flex items-center justify-center gap-2 ${
              state.submitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            <Send className={`w-5 h-5 ${state.submitting ? 'animate-pulse' : ''}`} />
            {state.submitting ? 'Отправка...' : 'Отправить заявку'}
          </button>

          {state.errors && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
              Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;