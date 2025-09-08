import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fadeInUp">
          {/* Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/profile.jpg"
              alt="Jayamanisha Profile"
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                console.log("Image failed to load, showing fallback");
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <svg
              className="w-24 h-24 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ display: "none" }}
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-primary">Jayamanisha</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate Software Developer | Fresh Graduate Ready to Make an
            Impact
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </a>

            <a
              href="https://drive.google.com/file/d/1u84Oa9F3j4G0eupUZ5mJ3tLiBVzN3Goa/view?usp=drive_link"
              target="_blank"
              download
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
