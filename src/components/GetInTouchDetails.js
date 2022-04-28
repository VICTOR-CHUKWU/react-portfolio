import {
  FaEnvelopeOpen,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaUserAlt,
  FaComments,
} from "react-icons/fa";
import { FiSend } from 'react-icons/fi'

const GetInTouchDetails = (props) => {
  const { touch, setInTouch } = props;
  return (
    <div className={`detail-touch ${touch ? "show-detail" : ""}`}>
      <div className="inner">
        <span className="close-button" onClick={() => setInTouch(!touch)}>
          X
        </span>
        <h1 className="text-center bold-h1">
          <span className="white-text">GET</span>{" "}
          <span className="orange-text">IN TOUCH</span>
        </h1>
        <div className="divider center-align">
          <span className="outer-line"></span>
          <FaEnvelopeOpen className="orange-icon" />
          <span className="outer-line"></span>
        </div>
        <section className="personal-info  mx-3">
          <div className="row mx-0 ">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-info-main">
                <div className="contact-info">
                  <div className="contact-item mx-2 my-2">
                    <h4 className="orange-text">PHONE</h4>
                    <h6>
                      <FaPhoneAlt className="contact-item-icon" />
                      +234 7032880693
                    </h6>
                  </div>
                  <div className="contact-item mx-2 my-2">
                    <h4 className="orange-text">EMAIL</h4>
                    <h6>
                      <FaEnvelope className="contact-item-icon" />
                      chifunwatu@gmail.com
                    </h6>
                  </div>
                  <div className="contact-item mx-2 my-2">
                    <h4 className="orange-text">ZOOM</h4>
                    <h6>
                      <FaPhoneAlt className="contact-item-icon" />
                      pablo okenwa
                    </h6>
                  </div>
                  <div className="contact-item mx-2 my-2">
                    <h4 className="orange-text">ADDRESS</h4>
                    <h6>
                      <FaHome className="contact-item-icon" />
                      Lagos, Nigeria
                    </h6>
                  </div>
                  <div className="contact-item mx-2 my-2">
                    <h4 className="orange-text">SOCIAL MEDIA</h4>
                    <div className="d-flex">
                      <a href="">
                        {" "}
                        <FaFacebook className="regular-icon facebook" />
                      </a>
                      <a href="https://twitter.com/okenwapablo" target='_blank'>
                        {" "}
                        <FaTwitter className="regular-icon twitter mx-2" />
                      </a>
                      <a href="https://github.com/VICTOR-CHUKWU" target='_blank'>
                        {" "}
                        <FaGithub className="regular-icon mx-2" />
                      </a>
                      <a href="https://www.linkedin.com/in/victor-nnabuike-chukwu/" target='_blank'>
                        {" "}
                        <FaLinkedin className="regular-icon linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="mx-4 contact-form-container">
                <h6 className="white-text">FEEL FREE TO DROP ME A LINE</h6>
                <p className="white-text">
                  If you have any suggestion, project or even you want to say
                  Hello.. Please fill out the form below and I will reply you
                  shortly.
                </p>
                <form className="form">
                  <div className="form-element">
                    <FaUserAlt />
                    <input
                      type="text"
                      placeholder="your name"
                      className="input-element"
                    />
                  </div>
                  <div className="form-element">
                    <FaEnvelope />
                    <input
                      type="email"
                      placeholder="you@gmail.com"
                      className="input-element"
                    />
                  </div>
                  <div className="form-element">
                    <FaComments />
                    <input
                      type="text"
                      placeholder="tell me your mind"
                      className="input-element"
                    />
                  </div>
                  <div>
                      <button type="submit" className="btn btn-resume">SEND MESSAGE<FiSend className="mx-2"/></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInTouchDetails;
