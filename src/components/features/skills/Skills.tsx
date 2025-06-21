"use client";

import { useState } from "react";

const skillsBar = [
  "React",
  "GitHub",
  "Flutter",
  "FireBase",
  "Electron",
  "Flask",
  "Figma",
  "Canva",
  "Tailwind",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",  
  "PHP",
  "WordPress"
];

const languages = [
  { name: "Java", proficiency: 95 },  
  { name: "Python", proficiency: 95 },
  { name: "JavaScript", proficiency: 93 },  
  { name: "C", proficiency: 50 },
  { name: "Dart", proficiency: 50 },
  { name: "PHP", proficiency: 50 },
];

const SkillsScrollBar = () => (
  <div
    id="container"
    className="w-full h-10 font-[Montserrat] relative overflow-hidden whitespace-nowrap bg-black text-white z-10"
  >
    <div className="scroll flex items-center justify-around w-fit whitespace-nowrap animate-scroll-loop">
      {[...skillsBar, ...skillsBar].map((skill, i) => (
        <div
          key={i}
          className="flex items-center text-sky-100 text-sm px-4 py-2 mx-4 rounded-md whitespace-nowrap shadow-md shadow-black/30"
        >
          {skill}
        </div>
      ))}
    </div>
    <div className="absolute w-full inset-0 pointer-events-none bg-[linear-gradient(90deg,_#000,_transparent_30%,_transparent_90%,_#000)]" />
    <style jsx>{`
      @keyframes scroll-loop {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll-loop {
        animation: scroll-loop 30s linear infinite;
      }
    `}</style>
  </div>
);



const SkillsRadarChart = () => {
  const skills = [
    { name: "Technical", level: 8.5 },
    { name: "Problem Solving", level: 9 },
    { name: "Communication", level: 8 },
    { name: "Initiative", level: 9.5 },
    { name: "Adaptability", level: 10 },
  ];

  const centerX = 300;
  const centerY = 300;
  const maxRadius = 200;
  const levels = 5;
  const angleStep = (2 * Math.PI) / skills.length;

  const skillPoints = skills.map((skill, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const radius = (skill.level / 10) * maxRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y, skill, angle };
  });

  const pathData =
    skillPoints
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ") + " Z";

  const gridLines = [];

  for (let i = 1; i <= levels; i++) {
    const radius = (i / levels) * maxRadius;
    gridLines.push(
      <circle
        key={`circle-${i}`}
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke="#64748b33"
        strokeWidth="1"
      />
    );
  }

  skills.forEach((_, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const endX = centerX + maxRadius * Math.cos(angle);
    const endY = centerY + maxRadius * Math.sin(angle);
    gridLines.push(
      <line
        key={`line-${index}`}
        x1={centerX}
        y1={centerY}
        x2={endX}
        y2={endY}
        stroke="#64748b33"
        strokeWidth="1"
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg w-full">
      <div className="flex justify-center items-center w-full overflow-x-auto">
        <svg
          viewBox="0 0 600 600"
          className="w-full max-w-[700px] h-auto drop-shadow-lg"
        >
          <g>{gridLines}</g>
          <path
            d={pathData}
            fill="rgba(129, 140, 248, 0.25)"
            stroke="#818cf8"
            strokeWidth="2"
          />
          {skillPoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#6366f1"
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer"
              filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))"
            />
          ))}
          {skillPoints.map((point, index) => {
            const labelRadius = maxRadius + 40; // Reduced from 60 to 40
            const labelX = centerX + labelRadius * Math.cos(point.angle);
            const labelY = centerY + labelRadius * Math.sin(point.angle);
            let textAnchor = "middle";
            let dy = "0.35em";

            // Adjust positioning based on angle
            if (point.angle < -Math.PI * 0.75 || point.angle > Math.PI * 0.75) {
              textAnchor = "middle";
              dy = point.angle > 0 ? "1.2em" : "-0.6em";
            } else if (point.angle < -Math.PI * 0.25) {
              textAnchor = "end";
            } else if (point.angle > Math.PI * 0.25) {
              textAnchor = "start";
            }

            return (
              <text
                key={`label-${index}`}
                x={labelX}
                y={labelY}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                dy={dy}
                className="text-sm font-semibold fill-indigo-300"
              >
                {point.skill.name}
              </text>
            );
          })}
          {[...Array(levels)].map((_, i) => (
            <text
              key={`level-${i}`}
              x={centerX + 5}
              y={centerY - ((i + 1) / levels) * maxRadius + 4}
              className="text-xs fill-indigo-500"
            >
              {(i + 1) * 2}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-sm text-indigo-300">
              {skill.name} ({skill.level}/10)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};



const CancerConstellation = () => {
  const cancerStars = [
    { id: 1, x: 15, y: 20, delay: 0 },
    { id: 2, x: 35, y: 15, delay: 0.5 },
    { id: 3, x: 55, y: 30, delay: 1 },
    { id: 4, x: 75, y: 25, delay: 1.5 },
    { id: 5, x: 85, y: 45, delay: 2 },
    { id: 6, x: 50, y: 65, delay: 2.5 },
    { id: 7, x: 25, y: 75, delay: 3 },
    { id: 8, x: 65, y: 80, delay: 3.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transform: 'rotate(15deg) scale(1.2)' }}>
      {/* Cancer Constellation */}
      {cancerStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: '3s',
          }}
        />
      ))}

      {/* Cancer Constellation lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
        <line x1="15%" y1="20%" x2="35%" y2="15%" stroke="white" strokeWidth="1" />
        <line x1="35%" y1="15%" x2="55%" y2="30%" stroke="white" strokeWidth="1" />
        <line x1="55%" y1="30%" x2="75%" y2="25%" stroke="white" strokeWidth="1" />
        <line x1="75%" y1="25%" x2="85%" y2="45%" stroke="white" strokeWidth="1" />
        <line x1="50%" y1="65%" x2="25%" y2="75%" stroke="white" strokeWidth="1" />
        <line x1="25%" y1="75%" x2="65%" y2="80%" stroke="white" strokeWidth="1" />
      </svg>
    </div>
  );
};

const NightSky = () => {
  const randomStars = [
    { id: 9, x: 10, y: 10, delay: 0.2 },
    { id: 10, x: 25, y: 5, delay: 0.7 },
    { id: 11, x: 40, y: 8, delay: 1.2 },
    { id: 12, x: 60, y: 12, delay: 1.7 },
    { id: 13, x: 80, y: 8, delay: 2.2 },
    { id: 14, x: 90, y: 20, delay: 2.7 },
    { id: 15, x: 5, y: 30, delay: 3.2 },
    { id: 16, x: 95, y: 35, delay: 3.7 },
    { id: 17, x: 8, y: 50, delay: 4.2 },
    { id: 18, x: 92, y: 55, delay: 4.7 },
    { id: 19, x: 15, y: 85, delay: 5.2 },
    { id: 20, x: 85, y: 90, delay: 5.7 },
  ];

  const shootingStars = [
    { id: 1, startX: 0, startY: 10, endX: 100, endY: 30, delay: 0, duration: 2, size: 1 },
    { id: 2, startX: 20, startY: 0, endX: 80, endY: 40, delay: 3, duration: 1.5, size: 0.5 },
    { id: 3, startX: 60, startY: 5, endX: 10, endY: 35, delay: 6, duration: 2.5, size: 1.5 },
    { id: 4, startX: 90, startY: 15, endX: 30, endY: 45, delay: 9, duration: 1.8, size: 0.8 },
    { id: 5, startX: 10, startY: 20, endX: 70, endY: 50, delay: 12, duration: 2.2, size: 1.2 },
    { id: 6, startX: 80, startY: 25, endX: 20, endY: 55, delay: 15, duration: 1.6, size: 0.6 },
    { id: 7, startX: 30, startY: 15, endX: 90, endY: 35, delay: 18, duration: 2.8, size: 1.8 },
    { id: 8, startX: 70, startY: 30, endX: 5, endY: 60, delay: 21, duration: 2.0, size: 1.0 },
    { id: 9, startX: 40, startY: 5, endX: 95, endY: 25, delay: 24, duration: 1.9, size: 1.3 },
    { id: 10, startX: 15, startY: 40, endX: 85, endY: 70, delay: 27, duration: 2.3, size: 0.7 },
    { id: 11, startX: 95, startY: 10, endX: 25, endY: 40, delay: 30, duration: 2.1, size: 1.4 },
    { id: 12, startX: 50, startY: 20, endX: 10, endY: 50, delay: 33, duration: 1.7, size: 0.9 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Random Stars */}
      {randomStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: '4s',
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={`shooting-${shootingStar.id}`}
          className="absolute bg-white rounded-full"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
            width: `${shootingStar.size * 4}px`,
            height: `${shootingStar.size * 4}px`,
            animation: `shootingStar${shootingStar.id} ${shootingStar.duration}s linear ${shootingStar.delay}s infinite`,
          }}
        />
      ))}

      {/* Random Constellation lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
        <line x1="10%" y1="10%" x2="25%" y2="5%" stroke="white" strokeWidth="0.5" />
        <line x1="25%" y1="5%" x2="40%" y2="8%" stroke="white" strokeWidth="0.5" />
        <line x1="40%" y1="8%" x2="60%" y2="12%" stroke="white" strokeWidth="0.5" />
        <line x1="60%" y1="12%" x2="80%" y2="8%" stroke="white" strokeWidth="0.5" />
        <line x1="80%" y1="8%" x2="90%" y2="20%" stroke="white" strokeWidth="0.5" />
        <line x1="5%" y1="30%" x2="15%" y2="50%" stroke="white" strokeWidth="0.5" />
        <line x1="15%" y1="50%" x2="8%" y2="85%" stroke="white" strokeWidth="0.5" />
        <line x1="95%" y1="35%" x2="92%" y2="55%" stroke="white" strokeWidth="0.5" />
        <line x1="92%" y1="55%" x2="85%" y2="90%" stroke="white" strokeWidth="0.5" />
      </svg>

      <style jsx>{`
        ${shootingStars.map((shootingStar) => `
          @keyframes shootingStar${shootingStar.id} {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 1;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(${shootingStar.endX - shootingStar.startX}px) translateY(${shootingStar.endY - shootingStar.startY}px);
              opacity: 0;
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [expandedSections, setExpandedSections] = useState({
    interests: false,
    personality: false,
    hobbies: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section
      id="skills"
      className="py-20 bg-black text-white min-h-screen relative overflow-hidden" > 
      <div className="relative z-10 mb-12">
        <SkillsScrollBar />
      </div>
      <div className="flex items-center justify-center px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-7xl flex items-center justify-center relative">
          {/* Night Sky Background */}
          <NightSky />
          
          {/* About Me Section - 1/3 */}
          <div className="w-1/3 flex flex-col items-center justify-center relative">
            {/* Cancer Constellation Background */}
            <CancerConstellation />
            
            <h1 className="text-7xl md:text-6xl font-bold text-white mb-2 tracking-wide relative z-10">
                About Me
            </h1>
            <div className="flex gap-2 mb-6 relative z-10">
                {["profile", "skills", "languages"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm rounded-xl transition-all font-medium ${
                      activeTab === tab
                        ? "bg-white/10 text-white border border-white/30"
                        : "bg-black/30 text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
          </div>

          {/* Active Tab Content - 2/3 */}
          <div className="w-2/3 flex justify-center">
            {activeTab === "skills" && (
              <div className="border border-gray-800 rounded-3xl p-6 flex justify-center items-center w-full max-w-4xl">
                <SkillsRadarChart />
              </div>
            )}
            {activeTab === "languages" && (
              <div className="border border-gray-800 rounded-3xl p-8 space-y-8 min-h-[600px] flex flex-col justify-center w-full max-w-5xl">
                <div className="space-y-6 w-full">
                  {languages.map((lang, i) => (
                    <div key={i} className="bg-gray-900/30 p-4 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <span className="text-white font-semibold text-lg w-24">{lang.name}</span>
                        <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                          <div
                            className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out shadow-lg"
                            style={{ width: `${lang.proficiency}%` }}
                          />
                        </div>
                        <span className="text-xl font-bold text-blue-400 w-16 text-right">{lang.proficiency}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "profile" && (
              <div className="space-card border border-blue-500/30 rounded-3xl p-6 w-full max-w-4xl">
                <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                  <div className="bg-gray-900/40 p-3 rounded-xl border border-blue-500/20">
                    <span className="text-gray-400 text-xs">Age</span>
                    <div className="text-blue-200 font-medium">20</div>
                  </div>
                  <div className="bg-gray-900/40 p-3 rounded-xl border border-blue-500/20">
                    <span className="text-gray-400 text-xs">Birthday</span>
                    <div className="text-blue-200 font-medium">07/18/2005</div>
                  </div>
                  <div className="bg-gray-900/40 p-3 rounded-xl border border-blue-500/20">
                    <span className="text-gray-400 text-xs">Personality</span>
                    <div className="text-blue-200 font-medium">INFP</div>
                  </div>
                  <div className="bg-gray-900/40 p-3 rounded-xl border border-blue-500/20">
                    <span className="text-gray-400 text-xs">Zodiac Sign</span>
                    <div className="text-blue-200 font-medium">Cancer</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start mb-1">
                      <button 
                        onClick={() => toggleSection('interests')}
                        className="text-white text-xl font-semibold min-w-[100px] hover:text-blue-300 transition-colors cursor-pointer text-left"
                      >
                        Interests
                      </button>
                      <div className="flex flex-wrap gap-2 ml-8">
                        {["Design", "Fullstack", "UI/UX", "Web Development"].map(
                          (item, i) => (
                            <span
                              key={i}
                              className="bg-gray-500/20 text-white text-xs px-3 py-1 rounded-full border border-gray-500/30"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    {expandedSections.interests && (
                      <div className="mt-4 bg-black/40 border border-white/20 rounded-2xl p-5 text-sm text-gray-200 leading-relaxed shadow-inner">
                        <p>
                          I'm drawn to full-stack web development where design, UI/UX,
                          and clean code come together to create intuitive,
                          user-centered experiences. I love building things that are
                          both functional and beautifully crafted.
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-start justify-between mb-1">
                      <button 
                        onClick={() => toggleSection('personality')}
                        className="text-white text-xl font-semibold min-w-[100px] hover:text-blue-300 transition-colors cursor-pointer text-left"
                      >
                        Personality
                      </button>
                      <div className="flex flex-wrap gap-2 ml-8">
                        {[
                          "Driven",
                          "Passionate",
                          "Creative",
                          "Curious",
                          "Spontaneous",
                          "Dreamer",
                          "TooManyIdeas",
                        ].map((item, i) => (
                          <span
                            key={i}
                            className="bg-gray-500/20 text-white text-xs px-3 py-1 rounded-full border border-gray-500/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    {expandedSections.personality && (
                      <div className="mt-4 bg-black/40 border border-white/20 rounded-2xl p-5 text-sm text-gray-200 leading-relaxed shadow-inner">
                        <p>
                          I'm a driven and passionate creator fueled by curiosity and
                          a love for learning. I thrive on spontaneous ideas, often
                          chasing creative sparks wherever they lead—sometimes all at
                          once. A dreamer at heart, I'm always imagining what could be
                          built next, blending fun with purpose in everything I do.
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-start justify-between mb-1">
                      <button 
                        onClick={() => toggleSection('hobbies')}
                        className="text-white text-xl font-semibold min-w-[100px] hover:text-blue-300 transition-colors cursor-pointer text-left"
                      >
                        Hobbies
                      </button>
                      <div className="flex flex-wrap gap-2 ml-8">
                        {[
                          "Ballroom Dancing",
                          "Cafe Hopping",
                          "Art",
                          "Coding Side Projects",
                          "Music",
                          "True Crime",
                          "Mysteries",
                          "Kpop",
                        ].map((item, i) => (
                          <span
                            key={i}
                            className="bg-gray-500/20 text-white text-xs px-3 py-1 rounded-full border border-gray-500/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    {expandedSections.hobbies && (
                      <div className="mt-4 bg-black/40 border border-white/20 rounded-2xl p-5 text-sm text-gray-200 leading-relaxed shadow-inner">
                        <p>
                          Whether it's exploring cute new cafes to work at,
                          deep-diving into niche interests like raising silkworms,
                          mechanical keyboards, orca whales, or the psychology of
                          colors — I'm always chasing curiosity. I love watching true
                          crime podcasts, painting or sketching characters from my
                          favorite shows, coding side projects, learning K-pop dances,
                          and dancing competitively in DanceSport (ballroom!). I'm
                          always open to connecting and meeting new people, so feel
                          free to message me just to chat! Ask me about my dog or my
                          current hyperfixation show and I'll definitely have a lot to
                          say.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 mb-12">
        <SkillsScrollBar />
      </div>

    </section>
  );
};
export default Skills;
