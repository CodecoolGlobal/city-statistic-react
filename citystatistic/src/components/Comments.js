import React from "react";

export default function Comments(props) {
    let comments = props.comments;

    return (
        <div>
            <ul id="comment-container">
                {comments.map(function (comment) {
                    return <li>{comment}</li>
                })}
            </ul>
        </div>
    );

}