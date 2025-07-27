import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next AI project? Let's connect and explore how we can create intelligent solutions together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              I'm always interested in discussing new opportunities, collaborations, 
              or just chatting about the latest in AI and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <a href="mailto:nikhil.sharma.ai@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  nikhilsharma21022006@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="p-3 bg-purple-600 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">India (Open to Remote)</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="p-3 bg-green-600 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h4>
                <p className="text-gray-600 dark:text-gray-300">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/nikhil21sh"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-sharma-508638346/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:nikhilsharma21022006@gmail.com"
                className="group p-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;