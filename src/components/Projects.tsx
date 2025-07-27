import React from 'react';
import { ExternalLink, Github, Mic, FileText, Eye, Shield, Clock } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Edge Virtual Assistant",
      description: "A powerful local-first voice assistant that processes real-time voice commands using LLMs. It integrates LangChain, Groq API, and LangGraph for reasoning and response generation, while Pyaudio, Pydub, and Gradio handle voice input/output and interaction. Ideal for on-device AI experiences that blend speech recognition with generative intelligence.",
      icon: Mic,
      tags: ["LangChain", "ElevenLabs", "Python", "SpeechRecognition" , "Computer vision"],
      gradient: "from-blue-500 to-cyan-500",
      status: "completed",
      url:"https://github.com/nikhil21sh/EDGE-virtual_assistant",
      demo:"/Virt_Assistant.mp4"
    },
    {
      title: "Doc Bot",
      description: "A GenAI-powered PDF reader that extracts, summarizes, and answers questions using RAG and custom embeddings. To be used as a working bot for full stack medical app (currently under work).",
      icon: FileText,
      tags: ["RAG", "PDF Processing", "Embeddings", "Streamlit"],
      gradient: "from-purple-500 to-pink-500",
      status: "completed",
      url:"https://github.com/nikhil21sh/DOC_BOT",
      demo:"/doc_bot.mp4"
    },
    {
      title: "Multimodal Agent",
      description: "An advanced multi-input agent that handles user queries on user input customizations of models , using LLaVA, LangChain, and external tools.",
      icon: Eye,
      tags: ["LLaVA", "Groq", "Multi-modal", "LangChain" ,"System Prompting"],
      gradient: "from-green-500 to-emerald-500",
      status: "completed",
      url:"https://github.com/nikhil21sh/MULTIMODAL-AGENT",
      demo:"/multi_modal.mp4"
    },
    {
      title: "PolicyReader Bot",
      description: "A smart insurance document analyzer that extracts policy details and answers user queries with precision using GenAI.",
      icon: Shield,
      tags: ["Insurance Tech","Async","Document AI", "HackRx 2025", "Bajaj Finserv"],
      gradient: "from-orange-500 to-red-500",
      status: "upcoming",
      url:"",
      demo:""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest work in Generative AI, from voice assistants to document understanding systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                {project.status === 'upcoming' && (
                  <div className="flex items-center space-x-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                    <Clock className="h-4 w-4" />
                    <span>Upcoming</span>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      {...(project.status === 'upcoming' && { onClick: e => e.preventDefault(), className: 'pointer-events-none opacity-50' })}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span></a>
                <a href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  {...(project.status === 'upcoming' && { onClick: e => e.preventDefault(), className: 'pointer-events-none opacity-50' })}
>
  <Github className="h-4 w-4" />
  <span>Code</span>
</a>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/nikhil21sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
