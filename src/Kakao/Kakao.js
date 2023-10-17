import { useEffect } from "react";


function Kakao(){
    
    useEffect(()=>{
        const container = document.getElementById('map');
        
        const options = {
            center: new window.kakao.maps.LatLng(35.157905,126.795814),
            level:3
        };
        const map = new window.kakao.maps.Map(container,options);
        const markerPosition = new window.kakao.maps.LatLng(35.157905, 126.795814);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);//첫번째 마커생성
    },[])
   
    return(
        <div id='map' style={{
            width:'500px',
            height:'500px'
        }}></div>
    )
}

export default Kakao;