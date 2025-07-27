import React from 'react';
import { Brain, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Nikhil Sharma</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Generative AI Developer passionate about building intelligent systems 
              that solve real-world problems through innovative AI solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nikhil21sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-sharma-508638346/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:nikhilsharma21022006@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-gray-400 hover:text-white transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• RAG Pipelines</li>
              <li>• LangChain Agents</li>
              <li>• Multi-modal AI</li>
              <li>• Document Understanding</li>
              <li>• Voice Assistants</li>
              <li>• Enterprise Automation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Nikhil Sharma. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1 mt-4 md:mt-0">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and React + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;