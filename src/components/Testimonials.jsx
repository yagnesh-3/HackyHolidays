const Testimonials = () => {
    const testimonials = [
      {
        text: "My daughter loved the camp! She went from knowing nothing about coding to building her own website. The instructors were patient and made learning fun.",
        author: "Priya Sharma",
        role: "Parent of Grade 8 Student",
        image: "https://randomuser.me/api/portraits/women/43.jpg"
      },
      {
        text: "The perfect balance of education and entertainment. My son looks forward to every session and has already asked to continue after summer!",
        author: "Rahul Patel",
        role: "Parent of Grade 5 Student",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        text: "As an IT professional, I was impressed with the curriculum quality. They made complex concepts simple for kids to understand.",
        author: "Anjali Mehta",
        role: "Parent of Grade 10 Student",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ];
  
    return (
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2 className="section-title">What Parents Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-img">
                    <img src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;