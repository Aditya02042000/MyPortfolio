import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Lovely Professional University, Punjab</h5>
              </div>
              <h3>Aug 2023 - Present</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a CGPA of 6.51. Demonstrated consistent performance in algorithmic excellence and robust backend architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Development Pro</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>Jun 2025 - Jul 2025</h3>
            </div>
            <p>
              Mastered mobile architecture through an intensive bootcamp focusing on Kotlin, XML, and modern Android SDKs. Deployed production-ready applications to the Google Play Store with Firebase integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-CEO | Tatva</h4>
                <h5>Student Technical Organization</h5>
              </div>
              <h3>Aug 2024 - Present</h3>
            </div>
            <p>
              Directed strategic planning for large-scale technical symposia impacting 500+ participants. Executed high-pressure operations and negotiated corporate sponsorships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
