import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Send,
  CheckCircle,
  MapPin,
  Sparkles,
  Loader
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { contactInfo } from '../data/personalData';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Match the variables in your EmailJS template
      const templateParams = {
        name: formData.name,
        title: formData.subject,
        email: formData.email,
        message: formData.message
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      label: t('phone'),
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
      color: 'green',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: contactInfo.whatsapp,
      link: `https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}`,
      color: 'green',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      color: 'blue',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: contactInfo.location,
      link: '#',
      color: 'red',
      gradient: 'from-red-400 to-pink-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@ayoubloueti',
      link: contactInfo.github,
      color: 'gray',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@ayoubloueti',
      link: contactInfo.linkedin,
      color: 'blue',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: '@ayoub.loueti',
      link: contactInfo.facebook,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@ayoub.loueti',
      link: contactInfo.instagram,
      color: 'pink',
      gradient: 'from-pink-400 to-purple-500'
    }
  ];

  return (
    <div className={`min-h-screen pt-16 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-blue-400 mr-3" size={32} />
            <h1 className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
              {t('contactMe')}
            </h1>
            <Sparkles className="text-purple-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Prêt à transformer vos idées en réalité digitale ? Contactons-nous pour discuter de votre prochain projet innovant !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
              {t('contactInformation')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                
                return (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block p-6 rounded-2xl transition-all duration-300 hover:scale-105 border backdrop-blur-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-800/80 hover:bg-gray-700/80 border-gray-700/50' 
                        : 'bg-white/80 hover:bg-gray-50/80 border-gray-200/50'
                    } shadow-lg hover:shadow-2xl`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${method.gradient} text-white transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {method.label}
                        </h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-3xl p-8 shadow-2xl border backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-gray-800/80 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}>
              {t('sendMessage')}
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center space-x-3">
                <CheckCircle size={24} className="text-green-400" />
                <span className="text-green-400 font-medium">
                  Message envoyé avec succès ! Je vous répondrai rapidement.
                </span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <span className="text-red-400 font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-semibold mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('name') || 'Nom'} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('subject')} *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Décrivez votre projet, vos besoins ou posez-moi vos questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full group flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader size={24} className="animate-spin" />
                ) : (
                  <Send size={24} className="group-hover:animate-pulse" />
                )}
                <span className="text-lg">
                  {isLoading ? 'Envoi en cours...' : t('send')}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;