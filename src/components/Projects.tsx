import React from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { projects } from '../data/personalData';

interface ProjectsProps {
  onNavigate?: (page: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const handleContactNavigation = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <div className={`min-h-screen pt-16 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code className="text-blue-400 mr-3" size={32} />
            <h1 className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
              {t('myProjects')}
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez mes créations les plus innovantes : des solutions technologiques qui repoussent les limites du possible
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 border backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 border-gray-700/50' 
                  : 'bg-white/80 border-gray-200/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <Sparkles size={20} className="text-yellow-400" />
                    <span className="text-white font-medium">Innovation</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                
                <p className={`text-base mb-6 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className={`text-sm font-semibold mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('technologiesUsed')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                          theme === 'dark' 
                            ? 'bg-gray-700/50 text-blue-400 border-gray-600/50' 
                            : 'bg-blue-50/50 text-blue-600 border-blue-200/50'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      <ExternalLink size={18} className="group-hover/btn:animate-pulse" />
                      <span>{t('demo')}</span>
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 group/btn flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg border ${
                        theme === 'dark'
                          ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border-gray-600/50'
                          : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50 border-gray-200/50'
                      }`}
                    >
                      <Github size={18} className="group-hover/btn:animate-spin" />
                      <span>{t('source')}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center p-12 rounded-3xl shadow-2xl border backdrop-blur-sm ${
          theme === 'dark' 
            ? 'bg-gray-800/80 border-gray-700/50' 
            : 'bg-white/80 border-gray-200/50'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-yellow-400 mr-3" size={32} />
            <h3 className={`text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
              Prêt à créer quelque chose d'extraordinaire ?
            </h3>
            <Sparkles className="text-pink-400 ml-3" size={32} />
          </div>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transformons vos idées les plus ambitieuses en solutions digitales révolutionnaires
          </p>
          <button 
            onClick={handleContactNavigation}
            className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span className="flex items-center">
              Lançons votre projet
              <ArrowRight size={20} className="ml-2 group-hover:animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;