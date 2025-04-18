import React from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MusicPlayer from '@/components/MusicPlayer';

const HeroSection: React.FC = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
                    style={{
                        backgroundImage: "url('/lovable-uploads/macbook.jpg')",
                        transform: "scale(1.1)"
                    }}
                ></div>
            </div> */}

            <div className="relative -z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            className="lg:w-1/2 z-10 relative"
                        >
                            <motion.div
                                className="rounded-full overflow-hidden w-20 h-20 mb-10 border-2"
                            >
                                <motion.img
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10
                                    }}
                                    src="https://img.icons8.com/?size=512&id=44442&format=png"
                                    alt="Developer Portrait"
                                    className="w-full h-full object-cover "
                                />
                            </motion.div>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            I'm Vuong a<br />
                            <span className="text-primaryblue">Software Engineer</span>
                        </h1>
                        <p className="dark:text-lightgray text-lg mb-10 leading-relaxed text-[#475569]">
                            With nearly 3 years of experience in building distributed systems and designing microservice architectures for real-time chat platforms. I focus on performance, stability, and scalability to bring impactful technology to life.
                        </p>

                        <div className="flex sm:flex-row gap-8 mb-8">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                <div className="flex items-center">
                                    <div className="relative">
                                        <span className="text-5xl font-bold text-primaryblue">2</span>
                                        <span className="text-primaryblue text-2xl font-bold ml-2 absolute top-0 right-[-20px]">+</span>
                                    </div>
                                </div>
                                <p className="text-sm dark:text-lightgray mt-1 text-[#475569]">Years of<br />experience</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                <div className="flex items-center">
                                    <div className="relative">
                                        <span className="text-5xl font-bold text-primaryblue">5</span>
                                        <span className="text-primaryblue text-2xl font-bold ml-2 absolute top-0 right-[-20px]">+</span>
                                    </div>
                                </div>
                                <p className="text-sm dark:text-lightgray mt-1 text-[#475569]">Company<br />projects</p>
                            </motion.div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-[#295e8a] hover:bg-[#1e4a6e] text-white font-semibold px-6 py-3 rounded-xl shadow">
                                Get My Resume
                            </Button>

                            <Button variant="secondary" size="lg" className="border dark:border-none border-[#c9ddee] text-[#295e8a] hover:bg-[#e4f0f7] dark:text-white dark:hover:text-black"
                                onClick={() => window.location.href = '/portfolio'}
                            >
                                My Portfolio
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 flex justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primaryblue/10 -z-10"
                                animate={{
                                    y: [0, -15, 0],
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            ></motion.div>

                            {/* Music section */}
                            <div className="hidden lg:flex gap-8 max-w-sm w-[400px] z-10 rounded-2xl overflow-hidden border-2 border-primaryblue/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">                                <MusicPlayer />
                            </div>

                            <motion.div
                                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primaryblue/10 -z-10"
                                animate={{
                                    y: [0, 15, 0],
                                    scale: [1, 1.1, 1],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;