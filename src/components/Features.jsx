import { FaUserGraduate, FaLaptopCode, FaUsers } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaUserGraduate />,
            title: "Guided by Passionate B.Tech CSE Students",
            description: "We are passionate B.Tech Computer Science students dedicated to making coding fun and easy for young learners."
        },
        {
            icon: <FaLaptopCode />,
            title: "Project-Based Learning",
            description: "Students build real applications they can showcase, not just complete exercises."
        },
        {
            icon: <FaUsers />,
            title: "Small Class Sizes",
            description: "1:1 or small group sessions ensure personalized attention for every student."
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <h2 className="section-title">Why Choose Our Camp</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;