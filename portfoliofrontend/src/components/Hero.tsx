import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';  // Add ArrowRight here


export const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                AARTHY J R
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                                Full Stack Developer & Robotics Engineer
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Pursuing B.Tech in Computer Science (AI and Robotics) at VIT Chennai.
                                Passionate about creating innovative solutions at the intersection of web development and robotics.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-6 mb-8"
                        >
                            {/* GitHub Link */}
                            <a
                                href="https://github.com/Aarthy-26"
                                className="text-gray-600 hover:text-indigo-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub"
                            >
                                <Github size={24} />
                            </a>

                            {/* LinkedIn Link */}
                            <a
                                href="https://linkedin.com/in/aarthyjr"
                                className="text-gray-600 hover:text-indigo-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>

                            {/* Email Link */}
                            <a
                                href="mailto:aarthyjogi26@gmail.com"
                                className="text-gray-600 hover:text-indigo-600 transition-colors"
                                aria-label="Send me an email"
                            >
                                <Mail size={24} />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            {/* View My Work Button */}
                            <a
                                href="#projects"
                                className="group flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                            >
                                View My Work
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>

                            {/* Contact Me Button */}
                            <a
                                href="#contact"
                                className="flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            {/* Profile Image */}
                            <img
                                src="/assets/rt.png" // Ensure that the image is in the 'public/assets' folder
                                alt="Profile"
                                className="relative rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
