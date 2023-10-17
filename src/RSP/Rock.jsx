function Rock(props) {
    return (
        <div className='control'>
            <img src='http://ggoreb.com/images/react/rock.png' onClick={() => { props.click(1) }}></img>
        </div>
    );
}

export default Rock;