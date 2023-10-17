import React, { useState } from 'react';
import "./Timeline.css";

import Post from './posts/Post';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "chaechae_",
      postImages: ["https://blog.kakaocdn.net/dn/bde9TD/btqCjRmlQ7R/It2trKSjcjFPV0KCzO3PU1/img.jpg", "https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800", "https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/ZjbqVcRtpcjbcd56WU175Iku0ZA.JPEG",],
      likes: 1000,
      timestamp: "2d",
      currentIndex: 0,
    },

    {
      user: "hebbbb_",
      postImages: ["https://i.namu.wiki/i/cS4lR_Kmb2H-LcVV0ge9eaLsenhaeSnoZ-NhIkiv4xn_GvCYStjYniOKQVAlk6WJaRyXNIkZ2_peC__BnibDFg.webp", "https://i.namu.wiki/i/ukdzGn7-wELDzW3pwiHKTHwtniRYgksguvHsfD85nVYO51oyK44H-V7kSjTonIaOY6XiIXPCJza8ZVF3EjPUAw.webp", "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1isF/image/FQeql1ClTckyqyCEb2-uPhYpcZI.jpg",],
      likes: 1000,
      timestamp: "12h",
      currentIndex: 0,
    },
    {
      user: "suejennie_",
      postImages: ["https://i.namu.wiki/i/tVBtQ-hDrnOLuqc8zbbQLsWHwmXWIRivnM4H6dqpwyBYZu22wNaxwOKHkDwx33Q7mF2esMUvRpPMWie_-gok5ysKSGZPB954nCxJ1mUXXJIyqFzI8wYrIzauc7EPF0f1d_sU5U-hRK9hlD8k223qqw.webp", "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg", "https://img.freepik.com/premium-photo/cute-little-red-bunny-rabbit-sitting-on-white-background-full-body-looking-at-camera-profile-adorable-pet-animal-copy-space_383342-534.jpg",],
      likes: 1000,
      timestamp: "6h",
      currentIndex: 0,
    },

    {
      user: "longhairman_",
      postImages: ["https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/03/07/4d959890-c6d2-4580-929f-0066f29fce4e.jpg", "https://t1.daumcdn.net/cfile/tistory/9925E43F5B6F949E06",],
      likes: 1000,
      timestamp: "6h",
      currentIndex: 0,
    },

    {
      user: "pinkhairman_",
      postImages: ["https://ae01.alicdn.com/kf/H5df505a6c257467487e91a0fbe5b9042K/30cm.jpg", "https://img.insight.co.kr/static/2022/03/31/700/img_20220331145525_0w7m8j2a.webp",],
      likes: 1000,
      timestamp: "6h",
      currentIndex: 0,
    }
  ]);

  const handleNextImage = (postIndex) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[postIndex].currentIndex =
        (updatedPosts[postIndex].currentIndex + 1) % updatedPosts[postIndex].postImages.length;
      return updatedPosts;
    });
  };

  const handlePrevImage = (postIndex) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[postIndex].currentIndex =
        (updatedPosts[postIndex].currentIndex - 1 + updatedPosts[postIndex].postImages.length) %
        updatedPosts[postIndex].postImages.length;
      return updatedPosts;
    });
  };



  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              postImage={post.postImages[post.currentIndex]}
              likes={post.likes}
              timestamp={post.timestamp}
              onPrevImage={() => handlePrevImage(index)} // 이전 이미지 클릭 핸들러
              onNextImage={() => handleNextImage(index)} // 다음 이미지 클릭 핸들러
            />
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default Timeline;