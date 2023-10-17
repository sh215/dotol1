function Paper(props) {
    return (
        <div className='control'>
            <img src='http://ggoreb.com/images/react/paper.png' onClick={() => { props.click(2) }}></img>
        </div>
    );
}

export default Paper;