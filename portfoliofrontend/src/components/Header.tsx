import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white shadow-sm z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Portfolio Title */}
                    <h1 className="text-2xl font-bold text-gray-800">Aarthy</h1>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
                        <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
                        <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
                        <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </nav>

                    

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <nav className="flex flex-col space-y-4">
                            <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
                            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
                            <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
                            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
                            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
