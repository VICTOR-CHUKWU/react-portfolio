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
        <div className="d-block d-lg-none profile-pics-container2"></div>
        <section className="personal-info mx-3">
          <div className="row mx-0">
            <h4 className="flex-align-center mb-3">
              <FaUserAlt className="orange-icon" />{" "}
              <span className="mx-3">PERSONAL INFO</span>
            </h4>
            <p>
              I am a Full-stack developer with 4+ years of experience in mobile
              web development and conceptualizing and delivering effective and
              efficient quality solutions.
            </p>
            <div className="col-12 col-md-6">
              <h6>First Name: Okenwa</h6>
              <h6>Last Name: Chukwu</h6>
              <h6>Date of birth: 18 feb</h6>
              <h6>Nationality: Nigerian</h6>
              <h6>Freelance: Available</h6>
            </div>
            <div className="col-12 col-md-6">
              <h6>Phone: +234 7032880693</h6>
              <h6>Address: Lagos, Nigeria</h6>
              <h6>Email: chifunwatu@gmail.com</h6>
              <h6>Spoken Langages: English - Igbo</h6>
              <h6>Github: victor-chukwu</h6>
            </div>
            <div className="button-div">
              <a
                href="https://docs.google.com/document/d/1SdwJARg58Nj5QlQAOR2ENSfgEDbXLhQgF38iaY9UhjE/edit?usp=sharing"
                target="_blank"
                className="btn btn-resume"
                rel="noreferrer"
              >
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
            <div className="col-12 col-md-5 col-lg-4 text-center">
              <div className="qualifications-sidebar">
                <div
                  className="nav flex-column nav-pills me-3"
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
            <div className="col-12 col-md-7 col-lg-8">
              <div className="qualification-main">
                <div className="tab-content" id="v-pills-tabContent">
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
                      <h5>Full Stack Developer, Twen</h5>
                      <h6>
                        {" "}
                        <FaCalendar />
                        <span className="mx-2">Aug, 2023 - Date</span>
                      </h6>
                      <ul>
                        <li>
                          I Optimize queries by taking statistics from a MYSQL
                          having over 25 million records, thereby increasing
                          application performance.
                        </li>
                        <li>
                          Build a full-stack application of a finance management
                          system for ticketing and account monitoring, exposing
                          REST APIs for external consumption
                        </li>
                        <li>
                          Create and maintain Responsive web pages using
                          Angular, SCSS and REST API using node js, express and
                          MYSQL
                        </li>
                      </ul>
                    </article>
                    <article className="my-2 mx-2">
                      <h5>Front end Developer, DryvAfrica</h5>
                      <h6>
                        {" "}
                        <FaCalendar />
                        <span className="mx-2">May, 2022 - July 2023</span>
                      </h6>
                      <ul>
                        <li>
                          Designed company web app using Next js and typescript
                          to give over 100, 000 users the ease of booking buses
                          at their convenience
                        </li>
                        <li>
                          Researched emerging web technologies and trends for
                          possible incorporation into sites.
                        </li>
                        {/* <li>Carries out unit testing with Jest.</li> */}
                      </ul>
                    </article>
                    <div className="small-hr"></div>
                    <article className="my-2 mx-2">
                      <h5>Front end Developer, CribMD</h5>
                      <h6>
                        {" "}
                        <FaCalendar />
                        <span className="mx-2">Dec, 2020 - April, 2022</span>
                      </h6>
                      <ul>
                        <li>
                          Carried out SEO optimisation to improve the company's
                          online presence and marketability to over 1,000 daily
                          visitors.
                        </li>
                        <li>
                          Designed and implemented a Video call app integrating
                          with Agora to enhance telemedicine services for more
                          than 50,000 consultations per month
                        </li>
                        <li>
                          Transformed native applications into mobile-friendly
                          products.
                        </li>
                      </ul>
                    </article>
                    <div className="small-hr"></div>
                    <article className="my-2 mx-2">
                      <h5>Technical Support Engineer, Microverse</h5>
                      <h6>
                        {" "}
                        <FaCalendar />{" "}
                        <span className="mx-2">Jan, 2022 - July 2023</span>
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
                      Bsc
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
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
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
                        <h5>Node JS</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>Express</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                        </h5>
                      </article>
                      <article className="col-6 py-2">
                        <h5>NEST JS</h5>
                        <h5>
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaStar className="rating-icon" />
                          <FaRegStar className="rating-icon" />
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
                      <article className="col-6 py-2">
                        <h5>MYSQL</h5>
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
              <h4 className="orange-text bold-h1">4+</h4>
              <h5 className="about-details-footer-text">YEARS OF EXPERIENCE</h5>
            </div>
            <div className="col-4 text-center">
              <h4>
                <FaHandshake className="footer-icon" />
              </h4>
              <h4 className="orange-text bold-h1">89+</h4>
              <h5 className="about-details-footer-text">DONE PROJECTS</h5>
            </div>
            <div className="col-4 text-center">
              <h4>
                <FaHeart className="footer-icon" />
              </h4>
              <h4 className="orange-text bold-h1">77+</h4>
              <h5 className="about-details-footer-text">HAPPY CUSTOMERS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetail;
