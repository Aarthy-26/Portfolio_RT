import { motion } from 'framer-motion';
import AnimatedSection from './shared/AnimatedSection';
import { Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code className="text-indigo-600" size={24} />,
            skills: ['Java', 'C', 'C++', 'Python', 'C#', 'CSS', 'HTML']
        },
        {
            title: 'Tools & Technologies',
            icon: <Wrench className="text-indigo-600" size={24} />,
            skills: ['.NET', 'CoppeliaSim', 'Git', 'RT Toolbox3', 'FH FHV Launcher']
        },
        {
            title: 'Databases & Tools',
            icon: <Database className="text-indigo-600" size={24} />,
            skills: ['MongoDB', 'Jupyter Notebook', 'R Studio']
        }
    ];

    // Rest of the component remains the same
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <AnimatedSection key={index}>
                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 bg-indigo-50 rounded-lg mr-4">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {category.title}
                                    </h3>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="flex flex-wrap gap-2"
                                >
                                    {category.skills.map((skill, idx) => (
                                        <motion.span
                                            key={idx}
                                            variants={itemVariants}
                                            className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-full text-sm font-medium hover:from-indigo-100 hover:to-purple-100 transition-colors duration-300"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;