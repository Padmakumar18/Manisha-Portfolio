import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Hello! I'm a passionate developer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a recent Computer Science graduate with a strong foundation
                in software development and a passion for creating innovative
                solutions. I enjoy turning complex problems into simple,
                beautiful, and intuitive designs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in technology started during my university years
                where I discovered my love for coding and problem-solving. I'm
                always eager to learn new technologies and take on challenging
                projects that push my boundaries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-primary font-medium">
                    Quick Learner
                  </span>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-primary font-medium">Team Player</span>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-primary font-medium">
                    Problem Solver
                  </span>
                </div>
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-200">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">
                  Education & Goals
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">
                        Master of Computer Applications
                      </h5>
                      <p className="text-gray-600 text-sm">
                        Kongu Arts and Science College • 2024 - 2026
                      </p>
                      <p className="text-gray-600 text-sm">Percentage: 80%</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">
                        Career Goal
                      </h5>
                      <p className="text-gray-600 text-sm">
                        To contribute to innovative projects while continuously
                        learning and growing as a software developer in a
                        collaborative environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Interests</h5>
                      <p className="text-gray-600 text-sm">
                        Web Development, Software Development, Open Source
                        Contribution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
