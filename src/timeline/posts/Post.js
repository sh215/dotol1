import React, { useState } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBordericon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CommentSection from '../../comments/Comments';

function Post({ user, postImage, timestamp, onPrevImage, onNextImage }) {

    const [isCommentOpen, setIsCommentOpen] = useState(false);

    const handleCommentClick = () => {
        setIsCommentOpen(!isCommentOpen);
    };

    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerAuthor">
                    <Avatar>{user[0]}</Avatar>
                    {user}• <span>{timestamp}</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="post__image">
                <img
                    src={postImage}
                    alt="Post"
                />
                <button className="prev-button" onClick={onPrevImage}>
                    &lt; 이전
                </button>
                <button className="next-button" onClick={onNextImage}>
                    다음 &gt;
                </button>
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBordericon className={`postIcon ${isLiked ? "liked" : ""}`}
                            onClick={handleLike} />
                        <ChatBubbleOutlineIcon className="postIcon" onClick={handleCommentClick} />
                        <TelegramIcon className="postIcon" />
                    </div>
                    <div className="post__iconSave">
                        <BookmarkBorderIcon className="postIcon" />
                    </div>

                </div>
                Liked by {likes} people.
            </div>

            {isCommentOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCommentClick}>×</span>
                        <CommentSection />
                    </div>
                </div>
            )}
        </div>

    );
}


export default Post;