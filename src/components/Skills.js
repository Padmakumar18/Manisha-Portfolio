import React from "react";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 85, icon: "🟨" },
    { name: "Python", level: 80, icon: "⚛️" },
    { name: "PHP", level: 75, icon: "🟢" },
    { name: "SQL", level: 70, icon: "🐍" },
    { name: "HTML/CSS", level: 90, icon: "🌐" },
    { name: "Git", level: 75, icon: "📚" },
    { name: "Jenkins", level: 65, icon: "🍃" },
    { name: "VB.NET", level: 70, icon: "🗄️" },
  ];

  const softSkills = [
    { name: "Communication", icon: "💬" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Time Management", icon: "⏰" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Critical Thinking", icon: "🧠" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and skills I've been working with recently
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-primary font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
