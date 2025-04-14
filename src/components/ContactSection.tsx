import React from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {Phone, Mail, Globe, Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">GET IN TOUCH</div>
                        <h2 className="text-4xl font-bold mb-8">Let's work together on your next project</h2>
                        <p className="text-lightgray mb-10">
                            I'm currently available for freelance work and new opportunities.
                            If you have a project that needs some creative thinking, I'd love to hear about it.
                        </p>

                        <div className="space-y-6 mb-8">
                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                                    <Phone size={20} className="text-primaryblue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="font-semibold">+84 767 129 183</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                                    <Mail size={20} className="text-primaryblue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-semibold">minhvuongday@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                                    <Globe size={20} className="text-primaryblue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Website</p>
                                    <p className="font-semibold">www.doanminhvuong.com</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { name: "facebook", icon: <Facebook size={18} />, link: "https://www.facebook.com/uranus.georgium" },
                                { name: "github", icon: <Github size={18} />, link: "https://github.com/VuongUranus" },
                                { name: "twitter", icon: <Twitter size={18} />, link: "https://x.com/onMinhVng10" },
                                { name: "linkedin", icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/doan-minh-vuong/" },
                                { name: "instagram", icon: <Instagram size={18} />, link: "https://www.instagram.com/min_vuon/" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target='_blank'
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-primaryblue"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-black/30 p-8 rounded-2xl border border-gray-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-3">
                                <Mail size={16} className="text-primaryblue" />
                            </div>
                            Send me a message
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition"
                                    placeholder="Project discussion"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Message</label>
                                <textarea
                                    className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition h-32 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button className="bg-primaryblue hover:bg-blue-600 w-full">Send Message</Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection