const AboutMe = (props) => {
    const { about, setAbout} = props;
    return(
        <div className="text-center gray-bg" onClick={() => setAbout(!about)}>
            <h2 className="bold-h2"><span className="white-text">ABOUT</span> <span className="orange-text">ME</span></h2>
        </div>
    )
}

export default AboutMe;
