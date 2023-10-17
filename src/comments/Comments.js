import React, { useState } from 'react';
import "./Comments.css";

function CommentSection() {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const handleInputChange = (event) => {
        setCommentInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (commentInput !== '') {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    };

    return (
        <div>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={commentInput}
                    onChange={handleInputChange}
                    placeholder="Add a comment..."
                />
                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default CommentSection;