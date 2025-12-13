import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  image: string; // New Image Prop
}

export default function ProjectCard({ title, description, tags, githubLink, liveLink, image }: ProjectProps) {
  return (
    <div className="group border border-gray-800 bg-gray-900/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
      
      {/* Clickable Image Area */}
      {liveLink ? (
        <Link href={liveLink} target="_blank" className="block overflow-hidden">
          <div className="relative h-48 w-full">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      ) : (
        <div className="relative h-48 w-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">No Preview Available</span>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 border border-blue-900/50 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-gray-800">
          <Link href={githubLink} target="_blank" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
            <Github size={18} />
            <span>View Code</span>
          </Link>
          {liveLink && (
            <Link href={liveLink} target="_blank" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}