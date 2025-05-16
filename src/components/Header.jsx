import { useState, useEffect } from 'react';
import { FaLaptopCode, FaBars } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <header style={{ boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div className="container">
                <nav>
                    <div className="logo">
                        <FaLaptopCode />
                        <span>HackyHolidays</span>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                        <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Why Us</a></li>
                        <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}>Courses</a></li>
                        <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
                        <li><a href="#register" onClick={(e) => { e.preventDefault(); scrollToSection('register'); }}>Register</a></li>
                    </ul>
                    <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FaBars />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;