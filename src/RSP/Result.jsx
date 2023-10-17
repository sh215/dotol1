function Result(props) {
    return(
      <div className='result'>
        <h1>Com: {props.com} </h1>
        <h1>Player: {props.player}</h1>
        <h1>{props.result}</h1>
      </div>
    );
  }

  export default Result;
