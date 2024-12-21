import AnimatedSection from './shared/AnimatedSection';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-16 relative">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                </AnimatedSection>

                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="mb-12">
                        <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="absolute -left-3 top-6 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                                <GraduationCap className="text-white" size={16} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Vellore Institute of Technology Chennai
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    Bachelor of Technology in Computer Science (AI and Robotics)
                                </p>
                                <div className="flex items-center text-gray-500 mb-2">
                                    <Calendar size={16} className="mr-2" />
                                    <span>Sep 2021 – Jul 2025</span>
                                </div>
                                <p className="text-indigo-600 font-semibold">CGPA: 8.10</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="absolute -left-3 top-6 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                                <GraduationCap className="text-white" size={16} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    CEOA Madurai
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    PCM with Computer Science
                                </p>
                                <div className="flex items-center text-gray-500 mb-2">
                                    <Calendar size={16} className="mr-2" />
                                    <span>Completed Mar 2020</span>
                                </div>
                                <p className="text-indigo-600 font-semibold">XII: 79.9%</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Education;