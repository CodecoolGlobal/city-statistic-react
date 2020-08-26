import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import thumbsUp from '@iconify/icons-fa-solid/thumbs-up';
import thumbsDown from '@iconify/icons-fa-solid/thumbs-down';


export default function Comments(props) {
    let comments = props.comments;
    return (
        <div>
            <ul id="comment-container" className="comments">
                {comments.reverse().map(function (comment) {
                    return <li>
                        <div className="user-comment-card">
                            <img className="user-avatar"
                                 src="https://library.kissclipart.com/20180904/ese/kissclipart-user-icon-png-clipart-computer-icons-user-66fe7db07b02eb73.jpg"/>
                            <div className="user-info">
                                <h4 className="user__name">anonymous</h4>
                                <div className="user__comment">
                                    {comment}</div>
                                <div className="user__comment__reaction">
                                    <Icon icon={thumbsUp} color="green" width="24"/> <small>0</small>
                                    <Icon icon={thumbsDown} color="red" width="24" /> <small>0</small>
                                </div>
                            </div>
                        </div>
                    </li>
                    //return<li>{comment}</li>
                })}
            </ul>
        </div>
    );

}