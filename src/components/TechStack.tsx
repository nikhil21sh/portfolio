import React from 'react';
import { Code, Database, Cloud, Cpu, Zap, Brain } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      color: "blue",
      technologies: ["LangChain", "HuggingFace Transformers", "Ollama", "LLaVA", "Whisper"]
    },
    {
      title: "Backend & APIs",
      icon: Code,
      color: "purple",
      technologies: ["Python", "Streamlit", "Groq API", "Gemini API", "Firebase"]
    },
    {
      title: "Databases & Search",
      icon: Database,
      color: "green",
      technologies: ["ChromaDB", "FAISS", "Firestore", "Vector Databases", "Semantic Search"]
    },
    {
      title: "Cloud & Services",
      icon: Cloud,
      color: "cyan",
      technologies: ["Firebase Auth", "Google Cloud", "API Integration", "Serverless Functions"]
    },
    {
      title: "Frontend & UI",
      icon: Zap,
      color: "orange",
      technologies: ["React", "TailwindCSS", "Framer Motion", "Responsive Design", "TypeScript"]
    },
    {
      title: "AI Models",
      icon: Cpu,
      color: "pink",
      technologies: ["GPT-4", "Gemini", "Local LLMs", "Multi-modal Models", "Custom Embeddings"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-900/20 ",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 dark:bg-purple-900/20",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50 dark:bg-green-900/20",
      cyan: "from-cyan-500 to-cyan-600 text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20",
      orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50 dark:bg-orange-900/20",
      pink: "from-pink-500 to-pink-600 text-pink-600 bg-pink-50 dark:bg-pink-900/20"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Stack & Tools
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and frameworks I use to build intelligent AI solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} mb-6`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`px-4 py-2 ${getColorClasses(category.color).split('text-')[1]} rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Always learning and exploring new AI technologies
            </span>
            <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;