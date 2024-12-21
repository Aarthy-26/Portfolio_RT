import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Your Profile"
                            className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
                        />
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Hello! My name is <span className="font-semibold text-indigo-600">[Your Name]</span>, and I am a passionate software developer with experience in building dynamic and efficient applications.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            With expertise in full-stack development, robotics, and machine learning, I enjoy creating innovative solutions that solve real-world problems. I have worked on projects ranging from developing drone-based systems to designing web applications.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, learning about AI advancements, or experimenting with creative ideas. I'm always eager to collaborate and learn from like-minded professionals.
                        </p>

                        <div className="mt-6">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
