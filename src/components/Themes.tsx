import React from 'react';
import { Sun, Moon, Globe, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Language, Theme } from '../types';

const Themes: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: 'light' as Theme,
      name: t('lightTheme'),
      icon: Sun,
      preview: 'bg-white border-gray-200',
      description: 'Interface claire et moderne'
    },
    {
      id: 'dark' as Theme,
      name: t('darkTheme'),
      icon: Moon,
      preview: 'bg-gray-800 border-gray-700',
      description: 'Interface sombre et élégante'
    }
  ];

  const languages = [
    {
      id: 'fr' as Language,
      name: t('french'),
      flag: '🇫🇷',
      description: 'Français'
    },
    {
      id: 'en' as Language,
      name: t('english'),
      flag: '🇺🇸',
      description: 'English'
    },
    {
      id: 'ar' as Language,
      name: t('arabic'),
      flag: '🇸🇦',
      description: 'العربية'
    }
  ];

  return (
    <div className={`min-h-screen pt-16 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('themes')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Personnalisez votre expérience avec les thèmes et langues disponibles
          </p>
        </div>

        <div className="space-y-12">
          {/* Theme Selection */}
          <div className={`rounded-2xl p-8 shadow-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg mr-4">
                <Sun size={24} />
              </div>
              <h2 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t('selectTheme')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {themes.map((themeOption) => {
                const IconComponent = themeOption.icon;
                const isSelected = theme === themeOption.id;
                
                return (
                  <button
                    key={themeOption.id}
                    onClick={() => setTheme(themeOption.id)}
                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-500/5'
                        : theme === 'dark'
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4">
                        <Check size={20} className="text-blue-500" />
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        isSelected ? 'bg-blue-500/10 text-blue-500' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className={`text-lg font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {themeOption.name}
                        </h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {themeOption.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`h-20 rounded-lg border-2 ${themeOption.preview}`}>
                      <div className="p-3">
                        <div className={`h-2 rounded mb-2 ${
                          themeOption.id === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                        }`}></div>
                        <div className={`h-2 rounded w-3/4 ${
                          themeOption.id === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                        }`}></div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language Selection */}
          <div className={`rounded-2xl p-8 shadow-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg mr-4">
                <Globe size={24} />
              </div>
              <h2 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t('selectLanguage')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((lang) => {
                const isSelected = language === lang.id;
                
                return (
                  <button
                    key={lang.id}
                    onClick={() => setLanguage(lang.id)}
                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isSelected
                        ? 'border-purple-500 bg-purple-500/5'
                        : theme === 'dark'
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4">
                        <Check size={20} className="text-purple-500" />
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-4xl mb-3">{lang.flag}</div>
                      <h3 className={`text-lg font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {lang.name}
                      </h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {lang.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preview Section */}
          <div className={`rounded-2xl p-8 shadow-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Aperçu des paramètres actuels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Thème actuel
                </p>
                <p className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {theme === 'dark' ? t('darkTheme') : t('lightTheme')}
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Langue actuelle
                </p>
                <p className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {languages.find(lang => lang.id === language)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;