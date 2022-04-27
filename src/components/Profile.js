import { useState } from "react";
import MyIntro from "./MyIntro";
import AboutMe from "./AboutMe";
import Portfoilio from "./Portfolio";
import GetInTouch from "./GetInTouch";
import AboutMeDetail from "./AboutMeDetail";
import GetInTouchDetails from "./GetInTouchDetails";
import PortfolioDetails from "./PortfolioDetails";

const Profile = () => {
  const [about, setAbout] = useState(false);
  const [inTouch, setInTouch] = useState(false)
  const [portfolio, setPortfolio] = useState(false)
  
  return (
    <div className="grid">
      <MyIntro />
      <AboutMe about={about} setAbout={setAbout} />
      <Portfoilio portfolio={portfolio} setPortfolio={setPortfolio}/>
      <GetInTouch touch={inTouch} setInTouch={setInTouch}/>
      <AboutMeDetail about={about} setAbout={setAbout} />
      <GetInTouchDetails touch={inTouch} setInTouch={setInTouch}/>
      <PortfolioDetails portfolio={portfolio} setPortfolio={setPortfolio}/>
    </div>
  );
};

export default Profile;
