import React, {useState} from "react";
import {Icon, InlineIcon} from '@iconify/react';
import thumbsUp from '@iconify/icons-fa-solid/thumbs-up';
import thumbsDown from '@iconify/icons-fa-solid/thumbs-down';
import axios from "axios";


export default function Comments(props) {

    function handleUpvote(e) {
        let element = document.getElementById(e.currentTarget.closest("div").dataset.id)
        let id = e.currentTarget.dataset.id
        let value = element.innerHTML
        value++
        element.innerHTML = value;
        axios.put('http://localhost:8080/rate/' + id, {rate: "upvote"}).then(res => console.log(res))
    }

    function handleDownvote(e) {
        let element = document.getElementById(e.currentTarget.closest("div").dataset.id + "down")
        console.log(e.currentTarget)
        let id = e.currentTarget.dataset.id
        let value = element.innerHTML
        value++
        element.innerHTML = value;
        axios.put('http://localhost:8080/rate/' + id, {rate: "downvote"}).then(res => console.log(res))
    }

    return (
        <div>
            <ul id="comment-container" className="comments">
                {props.comments.reverse().map(function (comment) {
                    return <li>
                        <div className="user-comment-card">
                            <img className="user-avatar"
                                 src="https://library.kissclipart.com/20180904/ese/kissclipart-user-icon-png-clipart-computer-icons-user-66fe7db07b02eb73.jpg"/>
                            <div className="user-info">
                                <h4 className="user__name">{}</h4>
                                <div className="user__comment">
                                    {comment.comment}</div>
                                <div className="user__comment__reaction">
                                    <div onClick={handleUpvote} data-id={comment.id}>
                                        <Icon icon={thumbsUp} color="green" width="24"/><small id = {comment.id} >{comment.upvote}</small>
                                    </div>
                                    <div onClick={handleDownvote} data-id={comment.id} class = "down">
                                        <Icon icon={thumbsDown} color="red" width="24"/> <small id = {comment.id + "down"}>{comment.downvote}</small>
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