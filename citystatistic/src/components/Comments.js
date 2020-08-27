import React, {useState} from "react";
import {Icon, InlineIcon} from '@iconify/react';
import thumbsUp from '@iconify/icons-fa-solid/thumbs-up';
import thumbsDown from '@iconify/icons-fa-solid/thumbs-down';
import axios from "axios";


export default function Comments(props) {
    let [replyContent, setReplyContent] = useState("");

    function handleReply(e) {

    }

    function handleChange(e) {
        e.preventDefault();
        setReplyContent((e.currentTarget).value)

    }

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

    function handleReplySubmit(e) {
        e.preventDefault()
        let id = e.currentTarget.dataset.id
        console.log(e.currentTarget)
        if (!replyContent == "") {
            axios.post('http://localhost:8080/reply/' + id, {reply: replyContent}).then(res => console.log(res))
        }
        e.target.reset();
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
                                <h4 className="user__name">{comment.appuser.username}</h4>
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
                                <button onClick={handleReply}>Reply</button>
                                <div className="replies">
                                    <ul>
                                        {comment.replies.map(function (reply){
                                            return <li>
                                                <p>{reply}</p>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                                <form id="commentForm" onSubmit={handleReplySubmit} data-id = {comment.id}>
                                    <textarea id={"replyTextArea" + comment.id} onChange={handleChange} placeholder="Share your opinion..."></textarea>
                                    <button id="submit" type="submit">Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}