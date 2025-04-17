import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation, useInView } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Enterprise Chat System (XCHAT)",
        tags: ["Golang", "Chat Application", "Mattermost", "..."],
        logo: "/lovable-uploads/xchat_logo.png",
        image: "/lovable-uploads/xchat.png",
        href: "/portfolio/xchat"
    },
    {
        id: 2,
        title: "Cloud Management Platform",
        tags: ["Golang", "SSH", "VNC", "..."],
        logo: "http://beta-cmp.tgdd.vn/assets/img/logo_1-16198ed6.svg",
        image: "/lovable-uploads/vmconnect.png",
        href: "/portfolio/vmconnect"
    },
    {
        id: 3,
        title: "Zalo CRM Bridge",
        tags: ["Golang", "Chat Application", "Zalo OA", "PostgreSQL", "..."],
        logo: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images//logo.svg",
        image: "/lovable-uploads/oa_hub.png",
        href: "/portfolio/zalo-crm-bridge"
    },
];

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
    const controls = useAnimation();
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 1
            }
        }
    };
    return (
        <section ref={sectionRef} className="py-24">
            <motion.div
                className="container mx-auto px-4 max-w-7xl"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Header */}
                    <motion.div className="space-y-12" variants={itemVariants}>
                        <div>
                            <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">
                                MY WORK
                            </div>
                            <h2 className="text-4xl font-bold mb-12">
                                Take a look at the latest projects I've done
                            </h2>
                            <Link
                                to="/portfolio"
                                className="group inline-flex items-center text-lg text-white hover:text-blue-400 transition-colors"
                            >
                                <span className="mr-2">Browse all projects</span>
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        {/* First Project Card */}
                        <motion.div variants={itemVariants}>
                            <ProjectCard project={projects[0]} />
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Additional Projects */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <ProjectCard project={projects[1]} />
                        <ProjectCard project={projects[2]} />
                    </motion.div>
                </div>
            </motion.div>
        </section >
    );
};

export default PortfolioSection;