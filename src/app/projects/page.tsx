import { experiences, projects } from "@/components/features/projects/ProjectsData";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { BarChart3, Code, Palette, Sparkles } from 'lucide-react';
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-hidden mx-auto px-8 sm:px-12 lg:px-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="pt-20 pb-16">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <TextGenerateEffect 
              words="PROJECTS" 
              className="text-5xl md:text-7xl lg:text-8xl text-white"
            />
          </div>

          {/* Back Button */}
          <div className="mb-10">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-400 hover:text-indigo-400 transition-colors font-semibold"
            >
              ← Back to Home
            </Link>
          </div>

          {/* All Projects Section */}
          <section className="mb-20 rounded-3xl bg-black/70 shadow-xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-7 h-7 text-blue-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">All Projects</h2>
            </div>
            
            {/* Frontend & UI/UX Category */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Frontend & UI/UX & Design</h3>
                <span className="text-gray-400 text-sm">Projects focused on design, interfaces, and user interaction</span>
              </div>
              <ProjectGrid items={projects.frontendUIUX.map(project => ({ 
                ...project, 
                link: (project as any).link ?? "",
                featured: false 
              }))} />
            </div>

            {/* Full-Stack Builds Section */}
            <section className="mb-20 rounded-3xl bg-black/70 shadow-xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-7 h-7 text-blue-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Full-Stack Builds</h2>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-gray-300 mb-8 text-lg">End-to-end apps with both frontend and backend logic.</p>
              <ProjectGrid items={projects.fullStack.map(project => ({ 
                ...project, 
                link: (project as any).link ?? "",
                featured: false 
              }))} />
            </section>

            {/* Data Heavy Section */}
            <section className="mb-20 rounded-3xl bg-black/70 shadow-xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-7 h-7 text-blue-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Data Heavy</h2>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-gray-300 mb-8 text-lg">Projects focused on data analysis, machine learning, and data visualization.</p>
              <ProjectGrid items={projects.dataHeavy.map(project => ({ 
                ...project, 
                link: (project as any).link ?? "",
                featured: false 
              }))} />
            </section>

            {/* Creative & Experimental Section */}
            <section className="mb-20 rounded-3xl bg-black/70 shadow-xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-7 h-7 text-blue-400 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Creative & Experimental</h2>
              </div>
              <p className="text-gray-300 mb-8 text-lg">Games, visualizations, or fun side projects with unique ideas.</p>
              <ProjectGrid items={projects.creativeExperimental.map(project => ({ 
                ...project, 
                link: (project as any).link ?? "",
                featured: false 
              }))} />
            </section>
          </section>

          {/* Experiences Section */}
          <section className="mb-10 rounded-3xl bg-black/70 shadow-xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-7 h-7 text-blue-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Experiences</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">{exp.title}</h3>
                  <p className="text-blue-400 mb-2">{exp.company} • {exp.duration}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-900/60 text-blue-300 rounded-full text-xs font-semibold shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Relevant Coursework Section */}
          <section className="mb-10 rounded-3xl bg-black/70 shadow-xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-7 h-7 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Relevant Coursework</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Advanced Algorithms",
                "Data Structures", 
                "Intermediate Web Development",
                "Foundations to Computer Systems",
                "Intro to Computer Vision",
                "Modeling for Computer Systems",
                "Introduction to Engineering"
              ].map((course, index) => (
                <div key={index} className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 shadow hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-white">{course}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 