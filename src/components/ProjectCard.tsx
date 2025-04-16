import { Link } from "react-router-dom";

interface Project {
    title: string;
    tags: string[];
    logo: string;
    image: string;
    href: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link
            to={project.href}
            className="block bg-neutral-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
            <div className="p-6">
                {/* Tags */}
                <div className="flex gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Project Info */}
                <div className="mb-6">
                    <div className="h-12 w-auto mb-4">
                        <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            className="h-full w-auto object-contain"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Project Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
        </Link>
    );
};

export default ProjectCard;