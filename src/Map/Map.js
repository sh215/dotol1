import Kakao from "../Kakao/Kakao";
import Sidenav from '../navigation/Sidenav'


function Map() {
 

    return (
      <>
      
      <div className="homepage__nav">
         <Sidenav/>
        </div>
        
      <Kakao/>
      <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h1>당신은 지금 여기에 있습니다.😉</h1>
      </>
   );

}

     
  

export default Map;
