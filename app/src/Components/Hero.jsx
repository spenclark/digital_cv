import React from "react"

export default function Hero({props}) {

    // come back and add links to aboutMe
    return (
        <div>
            <div>
                <h1>{props.title}</h1><p>{props.jobTitle}</p>
            </div>
            <div>
                <p>{props.aboutMe}</p>
            </div>
            <div>
                <p>{props.employmentStatus}</p>
            </div>
        </div>
    )
}