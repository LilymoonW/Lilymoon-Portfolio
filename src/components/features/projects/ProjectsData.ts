export const projects = {
  frontendUIUX: [
    {
      id: 1,
      title: "Sugar & Focus",
      category: "Frontend & Web Applications",
      description: "A productivity app that helps users manage their time and focus on tasks. Features include task management, time tracking, and progress visualization.",
      image: "/sugar&focus.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Live",
      link: "https://github.com/LilymoonW/sugar-and-focus",
      liveLink: "https://sugar-and-focus.vercel.app/"
    },
    {
      id: 2,
      title: "Personal Website",
      category: "Frontend & UI/UX",
      description: "Created an interactive personal website using react js and tailwind css.",
      image: "/personalweb.png",
      technologies: ["React", "Tailwind CSS"],
      status: "Live",
      link: "https://github.com/LilymoonW/practice",
      liveLink: "https://lilymoonws-portfolio.vercel.app/"
    },
    {
      id: 3,
      title: "HealthBridge",
      category: "UI/UX & Design",
      description: "Designed a Figma prototype for an interactive web app that demystifies healthcare insurance by simplifying jargon, estimating out-of-pocket costs, and featuring an AI chatbot for real-time support.",
      image: "/healthBridge.png",
      technologies: ["Figma", "UI/UX Design"],
      status: "Completed",
      liveLink: "https://www.figma.com/proto/5S5Y3uOnQwg8QLGItxaOLU/HackBrown?node-id=11-882&p=f&t=lgEdfdDjBNaY75On-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A882"
    },
    {
      id: 4,
      title: "Kirkland 12’s All Stars - Custom Poster Designs",
      category: "Design",
      description: "Created two individual posters and one group poster for the Kirkland American 12's All Stars team, which were professionally printed and displayed.",
      image: "/poster.png",
      technologies: ["Canva"],
      status: "Completed",
    }
  ],
  fullStack: [
    {
      id: 0,
      title: "Punchie Pass",
      category: "Full-Stack Builds",
      description: "A cute habit tracker that allows users to create a punch pass for their habits and track their progress. It is a full-stack application that uses React for the frontend and Firebase for the backend.",
      image: "/punchiePass.png",
      technologies: ["Firebase", "React", "HTML", "CSS", "JavaScript"],
      status: "In Progress",
    },
    {
      id: 1,
      title: "SMT Word Adventure",
      category: "Full-Stack Builds",
      description: "Built a full-stack application using Z3 for formal verification and utilized Flask for dynamic frontend. Modeled logic-based word puzzles and enabled real-time random generation and rendering in a web interface.",
      image: "/alexa.png",
      technologies: ["Python", "Flask", "Z3", "Alloy", "HTML", "CSS", "JavaScript"],
      status: "Live",
      link: "https://github.com/LilymoonW/FinalProject_CS340",
      liveLink: "https://finalproject-cs340.onrender.com/"
    },
    {
      id: 2,
      title: "Julienne",
      category: "App Development",
      description: "A gamified long term goal tracker with pomodoro aspects written in Dart. Utilized Firebase for user authentication and databasing. Used provider for state management.",
      image: "/julienne.png",
      technologies: ["Dart", "Firebase", "Provider"],
      status: "Incomplete",
      link: "https://github.com/LilymoonW/Julienne"
    },
    {
      id: 3,
      title: "To Do App",
      category: "App Development",
      description: "A simple to do app that allows users to add new tasks, check off existing tasks, and remove tasks. Created using flutter and utilized hive for databasing.",
      image: "/todo.png",
      technologies: ["Flutter", "Hive"],
      status: "Completed",
      link: "https://github.com/LilymoonW/todo"
    }
  ],
  dataHeavy: [
    {
      id: 1,
      title: "Remembering and Recognizing Emotions with β-VAEs",
      category: "Data Generation/Analysis & Machine Learning",
      description: "Explored emotional generalization in human perception using β-VAEs. Designed an emoji-based emotion dataset with varying entropy, extended evaluation with confusion matrices and heatmaps, and ran experiments on real and synthetic data using a modified β-VAE.",
      image: "/emoji.png",
      technologies: ["Python", "Machine Learning", "β-VAE", "PyTorch", "Data Analysis"],
      status: "Completed",
      link: "https://github.com/LilymoonW/cs331-vae-project",
      liveLink: "https://drive.google.com/file/d/10WE--5SllT6K4md5Su06FP9Eb41Am3Nq/view"
    },
    {
      id: 2,
      title: "Bechdel-Hollywood Graph",
      category: "Data Visualization & Analysis",
      description: "Explored gender imbalance in films by examining a real data set of fifty Hollywood movies and running them through a quantitative test",
      image: "/graph.png",
      technologies: ["Data Analysis", "Java"],
      status: "Completed",
      link: "https://github.com/bowlingpinbird/cs230-project"
    },
    {
      id: 3,
      title: "Wellesley Housing Selector",
      category: "Data Cleaning & Web Scraping",
      description: "Prompts to answer questions and displays a list of rooms on the Wellesley campus which match user's requirements",
      image: "/housing.png",
      technologies: ["Python", "Java", "Scraping Data", "Data Cleaning"],
      status: "Completed",
      link: "https://github.com/katiee374/Upskill_WellesleyHousing"
    }
  ],
  creativeExperimental: [
    {
      id: 1,
      title: "Harmony",
      category: "Audio Processing",
      description: "An interactive web app that makes piano lessons accessible for elementary students. I developed a system to transcribe audio recordings into notes using PyAudio and Librosa and compare them with MIDI-based sheet music using Python to calculate transcription accuracy.",
      image: "/harmony.png",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "PyAudio", "Librosa", "MIDI"],
      status: "Completed",
      link: "https://github.com/LilymoonW/Whack-2024"
    },
    {
      id: 2,
      title: "RFID Door Scanner",
      category: "Hardware & Prototyping",
      description: "Our prototype opens the door when it reads a valid card and displays the status of the door on the TFT screen. It opens the door using a rack and gear system, in which the rack was 3D printed. We used one Arduino to control the RFID scanner and the LEGO motor. We used another Arduino to control the TFT screen.",
      image: "/scanner.png",
      technologies: ["Arduino", "RFID", "3D Printing"],
      status: "Completed",
      link: "https://www.canva.com/design/DAGD2qxH4dQ/tLqNO3HhobpwKLWlOg1cEQ/edit"
    },
    {
      id: 3,
      title: "Game Jam Interactive Storytelling Game",
      category: "Experimental Game Development",
      description: "An interactive fiction game under theme of 'retelling'. Created sprite sheets, storyboarding, and helped code the game. Placed third in the Wellesley Game Jam",
      image: "/gameJam.png",
      technologies: ["Game Development", "Storytelling", "GoDot"],
      status: "Completed",
      link: "https://lwhalen.itch.io/matcha-loops"
    }
  ]
};

export const experiences = [
  {
    id: 0,
    title: "Frontend Development Lead",
    company: "ResearchMD",
    duration: "June 2025 - Present",
    description: "  ReSearchMD is a national platform based in Canada, dedicated to connecting medical students with research mentors across the country. Led front-end dev using Figma + responsive design to deliver clean, accessible UI. Mentored junior dev and ran team check-ins to align design + code quality.Streamlined design integration, accelerating UI deployment and team efficiency",
    technologies: ["Figma", "WordPress", "Responsive Design", "UI/UX", "Mentorship", "Team Collaboration"]
  },

  {
    id: 1,
    title: "Website Development Intern",
    company: "Fertility Within Reach",
    duration: "Feb 2025 - Present",
    description: "Created dynamic graphs using JavaScript, prototyped Figma designs, created data visualization tools to enhance navigation to improve site readability, hosted on GoDaddy. Designed JSON datasets to visualize fertility healthcare laws, exemptions, and initiatives across U.S. states. Collaborated in development meetings and incorporated user feedback to refine website content and UI.",
    technologies: ["JavaScript", "Figma", "Data Visualization", "JSON", "GoDaddy", "UI/UX Design"]
  },
  {
    id: 2,
    title: "Computer Science Teaching Assistant",
    company: "Wellesley College",
    duration: "Sept 2024 - Present",
    description: "Facilitate weekly tutoring sessions for students, improving performance by 15%. Grade assignments and exams for 50+ students and provide feedback on exam designs.",
    technologies: ["Teaching", "Computer Science", "Student Mentoring", "Assessment"]
  },
  {
    id: 3,
    title: "Engineering Team Member",
    company: "Formula SAE, Olin School of Engineering",
    duration: "Jan 2025 - Present",
    description: "Collaborate with cross-functional teams to integrate braking system with other vehicle subsystems. Spearheaded the assembly of a high-performance hydraulic braking system for the Formula SAE vehicle.",
    technologies: ["Mechanical Engineering", "Hydraulic Systems", "Team Collaboration", "Vehicle Design"]
  },
  {
    id: 4,
    title: "Founder",
    company: "Serendipity",
    duration: "May 2022 - Dec 2022",
    description: "Launched a fundraising initiative, raised $628 for the WEA Children's Fund by managing logistics, marketing and sales. Developed a website using SquareSpace, integrating payment systems and optimizing user experience. Engaged the community through a baking workshop and was featured in Greet Magazine for the initiative's success. Enhanced messaging by designing custom packaging and product descriptions, driving user engagement and sales.",
    technologies: ["SquareSpace", "Fundraising", "Marketing", "Community Engagement", "E-commerce"]
  }
]; 