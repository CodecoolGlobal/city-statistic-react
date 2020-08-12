import React from "react";
import axios from 'axios';

export default function CommentForm(props) {
    let citySlug = props.citySlug;

    console.log(citySlug)

    function handleSubmit() {
        axios.post('http://localhost:8080/add-comment/budapest', {comment: 'budapest321'}).then(res => console.log(res))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button id="submit" type="submit">Submit
                </button>
            </form>
        </div>
    );

}