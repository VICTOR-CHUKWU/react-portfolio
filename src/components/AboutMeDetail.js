import {
  FaAddressCard,
  FaUserAlt,
  FaFilePdf,
  FaEdit,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaCalendar,
  FaRegStar,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";
const AboutMeDetail = (props) => {
  const { about, setAbout } = props;
  return (
    <div className={`detail-about ${about ? "show-detail" : ""}`}>
      <div className="inner">
        <span className="close-button" onClick={() => setAbout(!about)}>
          X
        </span>
        <h1 className="text-center bold-h1">
          <span className="white-text">ABOUT</span>{" "}
          <span className="orange-text">ME</span>
        </h1>
        <div className="divider center-align">
          <span className="outer-line"></span>
          <FaAddressCard className="orange-icon" />
          <span className="outer-line"></span>
        </div>
        <section className="personal-info mx-3">
          <div className="row mx-0">
            <h4 className="flex-align-center mb-3">
              <FaUserAlt className="orange-icon" />{" "}
              <span className="mx-3">PERSONAL INFO</span>
            </h4>
            <p>
              I am a Frontend developer with over 1 Year of experience in mobile
              web development and conceptualizing and delivering effective and
              efficient quality solutions.
            </p>
            <div className="col-6">
              <h6>First Name: Victor</h6>
              <h6>Last Name: Chukwu</h6>
              <h6>Date of birth: 18 feb</h6>
              <h6>Nationality: Nigerian</h6>
              <h6>Freelance: Available</h6>
            </div>
            <div className="col-6">
              <h6>Phone: +234 7032880693</h6>
              <h6>Address: Ibadan, Nigeria</h6>
              <h6>Email: chifunwatu@gmail.com</h6>
              <h6>Spoken Langages: English - Igbo</h6>
              <h6>zoom: pablo okenwa</h6>
            </div>
            <div className="button-div">
              <a href="#" className="btn btn-resume">
                Download Resume <FaFilePdf className="mx-2" />
              </a>
              <a href="#" className="btn btn-blog">
                My Blog <FaEdit className="mx-2" />
              </a>
            </div>
          </div>
        </section>
        <div className="hr"></div>
        <section className="qualifications">
          <div className="row mx-0">
            <div className="col-4 text-center">
              <div className="qualifications-sidebar">
                <div
                  class="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="link-buttons nav-link active "
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <FaBriefcase className="mx-2" /> EXPERIENCE
                  </button>
                  <button
                    className="nav-link link-buttons"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <FaGraduationCap className="mx-2" /> EDUCATION
                  </button>
                  <button
                    className="nav-link link-buttons"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <FaStar className="mx-2" /> SKILLS
                  </button>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="qualification-main">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="bg-dark py-3 text-center">
                      <h4 className="orange-text">
                        <FaBriefcase />
                        EXPERIENCE
                      </h4>
                    </div>
                    <article className="my-2 mx-2">
                      <h5>Front end Developer, CribMD</h5>
                      <h6>
                        {" "}
                        <FaCalendar />
                        <span className="mx-2">Aug, 2021 - date</span>
                      </h6>
                      <ul>
                        <li>
                          Developing an Angular web app for Doctor online
                          Consultation and house visit.
                        </li>
                        <li>Built the company website with React Js.</li>
                        <li>Carries out unit testing with Jest.</li>
                      </ul>
                    </article>
                    <div className="small-hr"></div>
                    <article className="my-2 mx-2">
                      <h5>Technical Support Engineer, Microverse</h5>
                      <h6>
                        {" "}
                        <FaCalendar />{" "}
                        <span className="mx-2">Jan, 2022 - date</span>
                      </h6>
                      <ul>
                        <li>Providing advice and tips to Junior Developers.</li>
                        <li>code reviewing students codes.</li>
                        <li>
                          Mentoring junior students in code best practice.
                        </li>
                      </ul>
                    </article>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="bg-dark py-3 text-center">
                      <h4 className="orange-text">
                        <FaGraduationCap />
                        EDUCATION
                      </h4>
                    </div>
                    <article className="my-2 mx-2">
                      <h5>Sofware Engineering Diploma, Microverse</h5>
                      <h6>
                        {" "}
                        <FaCalendar />
                        <span className="mx-2">Aug, 2021 - April 2022</span>
                      </h6>
                      <p>Certicate for full stack developer</p>
                    </article>
                    <div className="small-hr"></div>
                    <article className="my-2 mx-2">
                      <h5>Bacherlors Degree, University of Nigeria </h5>
                      <h6>
                        {" "}
                        <FaCalendar />{" "}
                        <span className="mx-2">Oct, 2011 - July, 2015</span>
                      </h6>
                      Bsc in chemistry
                    </article>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="bg-dark py-3 text-center">
                      <h4 className="orange-text">
                        <FaStar />
                        SKILLS
                      </h4>
                    </div>
                    <div className="row my-2 mx-2">
                      <article className="col-6 py-2">
                        <h5>HTML</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>CSS3</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>JAVASCRIPT</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>REACT</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>ANGULAR</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>NEXT JS</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>SASS</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>RUBY</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>RAILS</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>POSTGRESQL</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
                        </h5>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hr"></div>
        <div className="about-details-footer">
          <div className="row mx-0 my-3">
            <div className="col-4 text-center">
              <h4>
                <FaBriefcase className="footer-icon" />
              </h4>
              <h4 className="orange-text bold-h1">1+</h4>
              <h5 className="white-text">YEARS OF EXPERIENCE</h5>
            </div>
            <div className="col-4 text-center">
              <h4>
                <FaHandshake className="footer-icon" />
              </h4>
              <h4 className="orange-text bold-h1">89+</h4>
              <h5 className="white-text">DONE PROJECTS</h5>
            </div>
            <div className="col-4 text-center">
              <h4>
                <FaHeart className="footer-icon" />
              </h4>
              <h4 className="orange-text bold-h1">77+</h4>
              <h5 className="white-text">HAPPY CUSTOMERS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetail;
