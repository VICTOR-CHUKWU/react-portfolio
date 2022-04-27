import MyIntro from "./MyIntro";
import AboutMe from "./AboutMe";
import Portfoilio from "./Portfolio";
import GetInTouch from "./GetInTouch";

const Profile = () => {
  return (
    <div className="grid">
      <MyIntro />
      <AboutMe />
      <Portfoilio />
      <GetInTouch />
    </div>
  );
};

export default Profile;
