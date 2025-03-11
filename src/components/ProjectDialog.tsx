"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "motion/react";

import { Project } from "../utils/interface";
import { ExternalLink, Github, XMark } from "./ui/Icons";

interface DialogProps {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project | null>>;
}

const ProjectDialog = ({
  selectedProject,
  setSelectedProject,
}: DialogProps) => {
  // Prevent scrolling when dialog is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Backdrop with blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setSelectedProject(null)}
      />
      
      <motion.div
        layoutId={selectedProject._id}
        className="fixed inset-0 z-50 grid place-items-center"
        onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
      >
        <div className="bg-black w-11/12 md:w-1/2 h-4/5 md:h-[90%] overflow-y-auto rounded-xl">
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-black size-8 rounded-full border border-white/40 grid place-items-center text-white z-10"
              onClick={() => setSelectedProject(null)}
            >
              <XMark />
            </button>
            <img
              src={selectedProject.image.url}
              width={300}
              height={300}
              alt={selectedProject.title}
              className="w-full aspect-video md:aspect-[12/6] object-cover object-center"
            />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h5 className="text-4xl font-bold">{selectedProject.title}</h5>
                <div className="flex items-center gap-4">
                  <Link href={selectedProject.githuburl} target="_blank">
                    <Github />
                  </Link>
                  <Link 
                    href={selectedProject.liveurl} 
                    target="_blank"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <span>Live</span>
                    <ExternalLink />
                  </Link>
                </div>
              </div>
              <div className="py-4 flex flex-wrap items-center gap-3">
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border border-white/40 rounded-2xl text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white/70 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDialog;
