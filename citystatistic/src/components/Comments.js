import React, {useState} from "react";
import {Icon, InlineIcon} from '@iconify/react';
import thumbsUp from '@iconify/icons-fa-solid/thumbs-up';
import thumbsDown from '@iconify/icons-fa-solid/thumbs-down';
import axios from "axios";


export default function Comments(props) {
    let comments = props.comments

    function handleUpvote(e) {
        let element = document.getElementById("upvotes")
        let id = document.getElementById("commentID").innerHTML
        let value = element.innerHTML
        value++
        element.innerHTML = value;
        axios.put('http://localhost:8080/rate/' + id, {rate: "upvote"}).then(res => console.log(res))
    }

    function handleDownvote(e) {
        let element = document.getElementById("downvotes")
        let id = document.getElementById("commentID").innerHTML
        let value = element.innerText
        value++
        element.innerText = value;
        axios.put('http://localhost:8080/rate/' + id, {rate: "downvote"}).then(res => console.log(res))

    }

    return (
        <div>
            <ul id="comment-container" className="comments">
                {comments.reverse().map(function (comment) {
                    comment = comment.split(",")
                    return <li>
                        <div className="user-comment-card">
                            <img className="user-avatar"
                                 src="https://library.kissclipart.com/20180904/ese/kissclipart-user-icon-png-clipart-computer-icons-user-66fe7db07b02eb73.jpg"/>
                            <div className="user-info">
                                <p id="commentID" hidden>{comment[4]}</p>
                                <h4 className="user__name">{comment[3]}</h4>
                                <div className="user__comment">
                                    {comment[0]}</div>
                                <div className="user__comment__reaction">
                                    <div onClick={handleUpvote}>
                                        <Icon icon={thumbsUp} color="green" width="24"/> <small id="upvotes">{comment[1]}</small>
                                    </div>
                                    <div onClick={handleDownvote}>
                                        <Icon icon={thumbsDown} color="red" width="24"/> <small id="downvotes">{comment[2]}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}