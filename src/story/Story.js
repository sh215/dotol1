// Story.js
import React, { useState } from 'react';
import "./Story.css";

function StoryItem({ image, username }) {
    const [clicked, setClicked] = useState(false);

    const openImageInNewWindow = () => {
        setClicked(true);
        const newWindow = window.open("", "_blank", "width=600,height=600"); // Add width and height parameters
        newWindow.document.write(`
        <html>
          <head>
            <title>${username}'s story</title>
          </head>
          <body>
            <img src="${image}" alt="${username}" style="max-width: 100%;">
          </body>
        </html>`);

        setTimeout(() => {
            newWindow.close();
        }, 2000);
    };

    return (
        <div className="story" onClick={openImageInNewWindow}>
            <img
                src={image}
                alt={username}
                style={{ border: clicked ? '4px solid lightgray' : '4px solid #ff914d' }}
            />
            <span>{username}</span>
        </div>
    );
}

function Story() {
    const [selectedImage, setSelectedImage] = useState(null);

    const stories = [
        { image: 'https://i.pinimg.com/originals/5d/f6/9c/5df69c78db2796a00422881908f21b1c.jpg', username: 'chaechae' },
        { image: 'https://i.pinimg.com/550x/27/c6/b5/27c6b5de360cf0f79ad29701390c0742.jpg', username: 'suehynni' },
        { image: 'https://contents.lotteon.com/itemimage/LO/12/52/49/62/07/_1/25/24/96/20/8/LO1252496207_1252496208_1.jpg/dims/resizef/720X720', username: 'hebbb' },
        { image: 'https://m.usagimall.com/web/product/big/202208/3d9ed345dcb14093094659174110f717.jpg', username: 'michel' },
        { image: 'https://cdn.imweb.me/thumbnail/20210822/9ddf135aa52fb.jpg', username: 'jackson' },
        { image: 'https://www.ikea.com/kr/ko/images/products/djungelskog-soft-toy-orangutan__0710167_pe727369_s5.jpg?f=s', username: 'beyonce' },
        { image: 'https://m.onemorebag.kr/web/product/big/202108/9e52e6bf43a22c83f2a11af28a66419b.jpg', username: 'kanye' },
        { image: 'https://m.itovic.com/web/product/big/202212/26f6f1b6bdabeec85b9869de1e6db819.jpg', username: 'cardib' },
    ];

    return (
        <div style={{ display: 'flex' }}>
            {/* If an image is selected, display it in a large view */}
            {selectedImage && (
                <div className="selected-image">
                    <img src={selectedImage} alt="Selected" />
                    {/* Add a button to close the large view */}
                    <button onClick={() => setSelectedImage(null)}>Close</button>
                </div>
            )}


            {/* Pass the function to set the selected image as a prop to each StoryItem */}
            {stories.map((story, index) => (
                <StoryItem
                    key={index}
                    image={story.image}
                    username={story.username}
                    onClick={() => setSelectedImage(story.image)}
                />
            ))}
        </div>
    );
}

export default Story;