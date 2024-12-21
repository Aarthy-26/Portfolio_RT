import AnimatedSection from './shared/AnimatedSection';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Full-Stack & Robotics Intern',
            company: 'Intech Systems',
            location: 'Chennai, Tamilnadu',
            period: 'Nov 2023 – Dec 2023',
            responsibilities: [
                'Developed a full-stack login webpage using ReactJS for the front-end and MongoDB for the back-end.',
                'Optimized robot performance using RT Toolbox3 and deployed machine vision systems for quality inspection and defect detection.',
                'Programmed and operated industrial robots (including 6-axis robot) for automation tasks such as assembly, material handling, and object detection.'
            ]
        },
        {
            title: 'Industrial Automation Intern',
            company: 'Autosys Engineering',
            location: 'Chennai, Tamilnadu',
            period: 'Sep 2023 – Oct 2023',
            responsibilities: [
                'Worked on PLC and SCADA systems, developing and modifying ladder logic to control industrial processes and machinery.',
                'Designed control sequences, implemented safety interlocks, and ensured seamless communication between field devices and the control room.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Professional Experience
                        </span>
                    </h2>
                </AnimatedSection>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <AnimatedSection key={index}>
                            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-indigo-100 rounded-lg">
                                        <Briefcase className="text-indigo-600" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-indigo-600 mb-2">
                                            {exp.company}
                                        </p>
                                        <div className="flex items-center text-gray-500 mb-4">
                                            <Calendar size={16} className="mr-2" />
                                            <span>{exp.period}</span>
                                            <span className="mx-2">•</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                                                    <span className="text-gray-600">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;