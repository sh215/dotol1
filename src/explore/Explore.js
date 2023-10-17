import React, { useEffect } from 'react';


 function Explore({ latitude, longitude }) {
    const apiKey = "4b68970d58c3d33c439e7f8d43e80ce4";

    // 카카오 API 호출
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
        document.head.appendChild(script);

        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude), // 초기 중심 좌표 (위도, 경도)
                    level: 3, // 지도 확대 레벨
                };
                new window.kakao.maps.Map(container, options);
            });
        });
    }, []);

    return (
        <>
            <div id="map" style={{ width: "100%", height: "400px" }}></div>
        </>
    );
}


export default Explore;
