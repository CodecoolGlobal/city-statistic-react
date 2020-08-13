import React, {useState} from "react";
import axios from 'axios';

export default function CommentForm(props) {
    let citySlug = props.citySlug;
    let [textContent, setTextContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!textContent == "") {
            axios.post('http://localhost:8080/add-comment/' + citySlug, {comment: textContent}).then(res => console.log(res))
            let commentSection = document.getElementById("comment-container")
            commentSection.innerHTML +=
                `<li>
                <div class="user-comment-card">
                    <img class="user-avatar" src="https://library.kissclipart.com/20180904/ese/kissclipart-user-icon-png-clipart-computer-icons-user-66fe7db07b02eb73.jpg"/>
                    <div class="user-info">
                        <h4 class="user__name">anonymous</h4>
                        <div class="user__comment">${textContent}</div>
                            <div class="user__comment__reaction">
                                <i class="icon ion-md-thumbs-up"></i> <small>0</small>
                                <i class="icon ion-md-thumbs-down"></i> <small>0</small>
                            </div>
                    </div>
                </div>
            </li>`
        }
        e.target.reset();

    }

    function handleChange(e) {
        e.preventDefault();
        setTextContent(document.getElementById("myTextarea").value)
    }

    return (
        <div>
            <form id="commentForm" onSubmit={handleSubmit}>
                <textarea id="myTextarea" onChange={handleChange} placeholder="Add comment..."></textarea>
                <button id="submit" type="submit">Submit
                </button>
            </form>
        </div>
    );

}