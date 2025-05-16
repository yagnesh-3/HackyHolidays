import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About CodeCrafters</h3>
                        <p>We provide professional coding education for CBSE students in India, making computer science accessible and engaging for young learners.</p>
                        <div className="social-links">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaYoutube /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#features">Why Choose Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#register">Registration</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <p><FaMapMarkerAlt /> Bangalore, India</p>
                        <p><FaEnvelope /> contact@codecrafters.com</p>
                        <p><FaPhone /> +91 98765 43210</p>
                        <p><FaWhatsapp /> +91 98765 43210</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2023 CodeCrafters. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;