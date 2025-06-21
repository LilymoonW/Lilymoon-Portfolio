"use client";

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProjectCardGridProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    status: string;
    link: string;
    liveLink?: string;
  };
}

export const ProjectCardGrid = ({ project }: ProjectCardGridProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push('/projects');
  };

  return (
    <div 
      className="project-card group w-full max-w-sm relative rounded-2xl border border-slate-700 overflow-hidden bg-black/40 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all"
      onClick={handleCardClick}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={450}
          height={300}
          className="project-image w-full h-56 md:h-64 object-cover object-center"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <div className="flex items-center space-x-2">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink className="w-4 h-4 text-white hover:text-blue-400 transition-colors" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Github className="w-4 h-4 text-white hover:text-blue-400 transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm
                         ${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                           project.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                           'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
            {project.status}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-white/5 text-gray-400 
                       rounded border border-white/10 hover:border-blue-400/50 
                       hover:text-blue-400 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}; 