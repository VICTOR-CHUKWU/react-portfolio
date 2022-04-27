import { FaSuitcase } from "react-icons/fa";
import { portfolioData } from "../data/Data";

const PortfolioDetails = (props) => {
  const { portfolio, setPortfolio } = props;
  return (
    <div className={`detail-portfolio ${portfolio ? "show-detail" : ""}`}>
      <div className="inner">
        <span className="close-button" onClick={() => setPortfolio(!portfolio)}>
          X
        </span>
        <h1 className="text-center bold-h1">
          <span className="white-text">MY</span>{" "}
          <span className="orange-text">PORTFOLIO</span>
        </h1>
        <div className="divider center-align">
          <span className="outer-line"></span>
          <FaSuitcase className="orange-icon" />
          <span className="outer-line"></span>
        </div>
        <div className="grid-portfolio">
            {
                portfolioData.map((item) => {
                    const { id, picture, projectName, liveLink, technologies, description } = item;
                    return (
                        <a href={liveLink} target='_blank' className="portfolio-item"
                        style={{
                            backgroundImage: `url(${picture})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                          key={id}
                        >
                          <h4>{projectName}</h4>
                        </a>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
