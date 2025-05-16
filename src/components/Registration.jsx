import { FaFileAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Registration = () => {
  return (
    <section className="registration" id="register">
      <div className="container">
        <h2 className="section-title">Secure Your Spot Today</h2>
        <p>Limited seats available for personalized attention. Choose your preferred registration method:</p>

        <div className="registration-options">
          <div className="reg-option">
            <h3><FaFileAlt /> Online Registration</h3>
            <p>Complete our simple Google Form and we'll contact you with confirmation and payment details within 24 hours.</p>
            <a href="YOUR_GOOGLE_FORM_LINK" className="btn" style={{ width: '100%', textAlign: 'center', marginTop: '15px' }}>
              Register Online
            </a>
          </div>

          <div className="reg-option">
            <h3><FaWhatsapp /> WhatsApp Registration</h3>
            <p>Message us directly on WhatsApp for immediate assistance with registration and any questions you may have.</p>
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="whatsapp-btn" style={{ width: '100%', textAlign: 'center', marginTop: '15px' }}>
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;