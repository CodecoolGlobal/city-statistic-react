import React, {useState} from "react";
import axios from 'axios';

export default function CommentForm(props) {
    let citySlug = props.citySlug;
    let [textContent, setTextContent] = useState("");
    let [comments, setComments] = useState(props.comments);

    function handleSubmit(e) {
        e.preventDefault();
        if (!textContent == "") {
            axios.post('http://localhost:8080/add-comment/' + citySlug, {comment: textContent}).then(res => console.log(res))
            setComments(... textContent);
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