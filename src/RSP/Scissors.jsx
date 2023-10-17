function Scissors(props) {
    return (
        <div className='control'>
            <img src='http://ggoreb.com/images/react/scissors.png' onClick={() => { props.click(0) }} />
        </div>

    );
}

export default Scissors;
