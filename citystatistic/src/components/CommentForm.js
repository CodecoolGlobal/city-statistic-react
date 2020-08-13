import React, {useState} from "react";
import axios from 'axios';

export default function CommentForm(props) {
    let citySlug = props.citySlug;
    let [textContent, setTextContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/add-comment/' + citySlug, {comment: textContent}).then(res => console.log(res))
    }

    function handleChange(e) {
        e.preventDefault();
        setTextContent(document.getElementById("myTextarea").value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea id="myTextarea" onChange={handleChange} placeholder="Add comment..."></textarea>
                <button id="submit" type="submit">Submit
                </button>
            </form>
        </div>
    );

}