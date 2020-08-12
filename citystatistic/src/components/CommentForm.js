import React, {useEffect, useState} from "react";

export default function CommentForm(props) {
    let citySlug = props.citySlug;

    console.log(citySlug)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Add your comment here" required/>
                <button id="submit" type="submit">Submit
                </button>
            </form>
        </div>
    );

    function handleSubmit(event) {
        event.preventDefault();
        const data = event.target;
        fetch(`localhost:8080/add-comment/budapest`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({comment: "event.target"}),
        }).then(response => response.json());
        console.log(data);
    }

}