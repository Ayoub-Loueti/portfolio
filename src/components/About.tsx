import React from 'react';
import { Download, Code, Server, Monitor, Palette, Settings, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo, technicalSkills } from '../data/personalData';
import CVPdf from '../data/ING_Ayoub_LOUATI.pdf';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = CVPdf;
    link.download = 'ING_Ayoub_LOUATI.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillCategories = [
    {
      title: t('programmingLanguages'),
      icon: Code,
      skills: technicalSkills.programmingLanguages,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('backendDevelopment'),
      icon: Server,
      skills: technicalSkills.backendDevelopment,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: t('frontendDevelopment'),
      icon: Monitor,
      skills: technicalSkills.frontendDevelopment,
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: t('uiuxDesign'),
      icon: Palette,
      skills: technicalSkills.uiuxDesign,
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: t('toolsTechnologies'),
      icon: Settings,
      skills: technicalSkills.toolsTechnologies,
      color: 'orange',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: t('softSkills'),
      icon: Users,
      skills: technicalSkills.softSkills,
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      green: 'text-green-400 bg-green-500/10 border-green-500/20',
      pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      orange: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      teal: 'text-teal-400 bg-teal-500/10 border-teal-500/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className={`min-h-screen pt-16 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-blue-400 mr-3" size={32} />
            <h1 className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent`}>
              {t('aboutMe')}
            </h1>
            <Sparkles className="text-cyan-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez mon parcours, mes compétences et ma passion pour le développement
          </p>
        </div>

        {/* About Section */}
        <div className={`rounded-3xl p-8 mb-12 shadow-2xl border backdrop-blur-sm ${
          theme === 'dark' 
            ? 'bg-gray-800/80 border-gray-700/50' 
            : 'bg-white/80 border-gray-200/50'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className={`prose prose-lg max-w-none ${
                theme === 'dark' ? 'prose-invert' : ''
              }`}>
                {personalInfo.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={`text-lg leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <button 
                onClick={handleDownloadCV}
                className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <Download size={24} className="group-hover:animate-bounce" />
                <span className="text-lg">{t('downloadCV')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-500 to-cyan-500">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-12">
          <h2 className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
            {t('technicalExpertise')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colorClasses = getColorClasses(category.color);
              
              return (
                <div
                  key={index}
                  className={`group rounded-3xl p-6 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border backdrop-blur-sm ${
                    theme === 'dark' 
                      ? 'bg-gray-800/80 border-gray-700/50 hover:border-gray-600/50' 
                      : 'bg-white/80 border-gray-200/50 hover:border-gray-300/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl border transition-all duration-300 group-hover:scale-110 ${colorClasses}`}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className={`text-xl font-bold ml-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border ${
                          theme === 'dark' 
                            ? 'bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 border-gray-600/50' 
                            : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 border-gray-200/50'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;