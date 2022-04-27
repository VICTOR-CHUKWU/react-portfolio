const Portfoilio = (props) => {
    const { portfolio, setPortfolio } = props;
    return(
        <div className="text-center gray-bg" onClick={() => setPortfolio(!portfolio)}>
            <h2 className="bold-h2"><span className="white-text">MY</span> <span className="orange-text">PORTFOLIO</span></h2>
        </div>
    )
}

export default Portfoilio;