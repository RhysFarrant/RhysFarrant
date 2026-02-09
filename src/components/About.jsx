function About() {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git'];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a web developer who enjoys building things that live on
            the internet. I develop exceptional websites and web apps that
            provide intuitive, pixel-perfect user interfaces.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-image">
          <div className="image-placeholder">Your Photo</div>
        </div>
      </div>
    </section>
  );
}

export default About;
