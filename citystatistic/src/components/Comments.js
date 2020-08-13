import React from "react";

export default function Comments(props) {
    let comments = props.comments;

    return (
        <div>
            <ul id="comment-container" className="comments">
                {comments.map(function (comment) {
                    return <li>
                        <div className="user-comment-card">
                            <img className="user-avatar"
                                 src="https://library.kissclipart.com/20180904/ese/kissclipart-user-icon-png-clipart-computer-icons-user-66fe7db07b02eb73.jpg"/>
                            <div className="user-info">
                                <h4 className="user__name">anonymous</h4>
                                <div className="user__comment">
                                    {comment}</div>
                                <div className="user__comment__reaction">
                                    <i className="icon ion-md-thumbs-up"/> <small>0</small>
                                    <i className="icon ion-md-thumbs-down"/> <small>0</small>
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