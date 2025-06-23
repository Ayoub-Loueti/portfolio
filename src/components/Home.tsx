import React from 'react';
import { Phone, Mail, MapPin, GraduationCap, Github, Linkedin, Code, Sparkles, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo, contactInfo } from '../data/personalData';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-16 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section - Centered */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-500 to-blue-600">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className={`flex items-center px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 text-green-400 border-gray-700/50' 
                  : 'bg-white/80 text-green-600 border-gray-200/50'
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Disponible pour projets</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className={`text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
              {personalInfo.name}
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <Code className="text-blue-400 mr-3" size={28} />
              <p className={`text-2xl lg:text-3xl font-semibold ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {t('fullStackDeveloper')}
              </p>
            </div>

            <p className={`text-lg lg:text-xl mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Créateur d'expériences digitales innovantes et performantes
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className={`flex items-center justify-center space-x-3 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                <Phone size={20} />
              </div>
              <span className="font-medium">{contactInfo.phone}</span>
            </div>
            <div className={`flex items-center justify-center space-x-3 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                <Mail size={20} />
              </div>
              <span className="font-medium">{contactInfo.email}</span>
            </div>
            <div className={`flex items-center justify-center space-x-3 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
                <MapPin size={20} />
              </div>
              <span className="font-medium">{contactInfo.location}</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-4 mb-16">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50' 
                  : 'bg-white/80 text-gray-600 hover:bg-gray-100/80 hover:text-gray-900 border border-gray-200/50'
              }`}
            >
              <Github size={28} className="group-hover:animate-pulse" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 text-gray-300 hover:bg-blue-600 hover:text-white border border-gray-700/50' 
                  : 'bg-white/80 text-gray-600 hover:bg-blue-600 hover:text-white border border-gray-200/50'
              }`}
            >
              <Linkedin size={28} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Degrees & Certifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Degrees */}
          <div className={`rounded-3xl p-8 shadow-2xl border backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-gray-800/80 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl mr-4">
                <GraduationCap size={32} />
              </div>
              <h2 className={`text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
                {t('degrees')}
              </h2>
            </div>
            
            <div className="space-y-4">
              {personalInfo.degrees.map((degree, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl transition-all duration-300 hover:scale-105 border ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 hover:bg-gray-600/50 border-gray-600/50' 
                      : 'bg-gray-50/50 hover:bg-gray-100/50 border-gray-200/50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {degree}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`rounded-3xl p-8 shadow-2xl border backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-gray-800/80 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-2xl mr-4">
                <Award size={32} />
              </div>
              <h2 className={`text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent`}>
                Certifications
              </h2>
            </div>
            
            <div className="space-y-4">
              {personalInfo.certifications.map((certification, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl transition-all duration-300 hover:scale-105 border ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 hover:bg-gray-600/50 border-gray-600/50' 
                      : 'bg-gray-50/50 hover:bg-gray-100/50 border-gray-200/50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                    <span className={`font-medium text-sm ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {certification}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;