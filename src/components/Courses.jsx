import { FaClock, FaSignal, FaFilePdf } from 'react-icons/fa';

const Courses = () => {
    const courses = [
        {
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            title: "Web Development Fundamentals",
            description: "Learn HTML, CSS, and basic JavaScript to create interactive websites and build a personal portfolio project.",
            duration: "2 Weeks",
            level: "Beginner",
            price: "₹500",
            regLink: "https://wa.me/918247223929?text=Hi!%20I%20want%20to%20register%20for%20Web%20Development%20Fundamentals",
            pdfLink: "/pdf/web-dev-fundamentals.pdf" // Add PDF link for each course
        },
        {
            image: "https://images.unsplash.com/photo-1542903660-eedba2cda47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            title: "Python Programming",
            description: "Master Python basics through fun projects like games and simple applications with real-world relevance.",
            duration: "2 Weeks",
            level: "Beginner",
            price: "₹500",
            regLink: "https://wa.me/918247223929?text=Hi!%20I%20want%20to%20register%20for%20Python%20Programming",
            pdfLink: "/pdf/python-programming.pdf"
        },
        {
            image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            title: "Web to Python Journey",
            description: "Comprehensive 4-week program covering web development and Python programming fundamentals.",
            duration: "4 Weeks",
            level: "Beginner",
            price: "₹500",
            regLink: "https://wa.me/918247223929?text=Hi!%20I%20want%20to%20register%20for%20Web%20to%20Python",
            pdfLink: "/pdf/web-to-python.pdf"
        },
        {
            image: "https://images.unsplash.com/photo-1581090700227-1e8e48a9fddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            title: "Design Your Own Course",
            description: "Customize your learning path by choosing topics and pace that match your interests and goals.",
            duration: "Flexible",
            level: "All Levels",
            price: "₹600",
            regLink: "https://wa.me/918247223929?text=Hi!%20I%20want%20to%20Design%20my%20own%20Course",
            // pdfLink: "/pdf/design-your-own-course.pdf"
        }

    ];

    return (
        <section className="courses" id="courses">
            <div className="container">
                <h2 className="section-title">Our Course Offerings</h2>
                <div className="course-cards">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div className="course-img">
                                <img src={course.image} alt={course.title} />
                            </div>
                            <div className="course-info">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                <div className="course-meta">
                                    <span className="course-duration">
                                        <FaClock /> {course.duration}
                                    </span>
                                    <span className="course-level">
                                        <FaSignal /> {course.level}
                                    </span>
                                </div>
                                <div className="course-reg">
                                    <div className="course-actions">
                                        {course.pdfLink && <a
                                            href={course.pdfLink}
                                            className="pdf-btn"
                                            download
                                            aria-label={`Download ${course.title} syllabus`}
                                        >
                                            <FaFilePdf /> Syllabus
                                        </a>}
                                        <span className="course-price">{course.price}</span>
                                    </div>
                                    <a href={course.regLink} className="btn enroll-btn">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;