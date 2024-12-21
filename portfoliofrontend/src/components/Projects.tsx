import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import AnimatedSection from './shared/AnimatedSection';

const Projects = () => {
    const projects = [
        {
            title: 'Drone-Based Fruit Counting',
            description: 'Developed a drone-based fruit counting system in CoppeliaSim to detect ripe and unripe fruits, comparing VGG16, MobileNetV2, and ResNet50 models.',
            image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=600',
            technologies: ['CoppeliaSim', 'Python', 'VGG16', 'Computer Vision'],
            highlights: ['Best accuracy with VGG16', 'Real-time detection', 'Automated counting']
        },
        {
            title: 'Hybrid DNA Image Encryption',
            description: 'Researched a text encryption system using LZW compression and DNA-based encoding, embedding encrypted data within images.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
            technologies: ['Python', 'LZW', 'Visual Cryptography', 'DNA Computing'],
            highlights: ['Secure transmission', 'Efficient compression', 'Novel approach']
        },
        {
            title: 'Real-time Weed-Picking Robot',
            description: 'Developing a real-time weed-picking robot to improve crop yield by efficiently removing weeds using advanced sensors and robotic arms.',
            image: 'https://images.unsplash.com/photo-1615138133693-e3595bc5c695?auto=format&fit=crop&q=80&w=600',
            technologies: ['Robotics', 'Machine Learning', 'Image Processing', 'Sensors'],
            highlights: ['Automated detection', 'Precision control', 'Sustainable farming']
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <AnimatedSection key={index}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href="#" className="p-2 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                                        <ul className="space-y-1">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-center text-gray-600">
                                                    <Code2 size={16} className="mr-2 text-indigo-600" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;