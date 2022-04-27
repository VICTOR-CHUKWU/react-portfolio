const GetInTouch = (props) => {
    const {touch, setInTouch} = props;
    return(
        <div className="text-center gray-bg" onClick={() => setInTouch(!touch)}>
            <h2 className="bold-h2"><span className="white-text">GET</span> <span className="orange-text">IN TOUCH</span></h2>
        </div>
    )
}

export default GetInTouch;