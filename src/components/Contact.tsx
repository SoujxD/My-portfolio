import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <div className="contact-stack">
              <p>
                <a href="mailto:soujanya@usc.edu" data-cursor="disable">
                  soujanya@usc.edu
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/soujanya-chavan" target="_blank" rel="noreferrer" data-cursor="disable">
                  LinkedIn — soujanya-chavan
                </a>
              </p>
              <p>(213) 245-3401 · Los Angeles, CA</p>
            </div>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/SoujxD" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com/in/soujanya-chavan" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
            <a href="mailto:soujanya@usc.edu" data-cursor="disable" className="contact-social">
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Based in</h4>
            <div className="contact-stack">
              <p>Los Angeles, California</p>
              <p>Open to Data Science, ML, and GenAI roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
