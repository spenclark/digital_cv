import React from "react"
import {baseStyles, heroStyles} from "./styles/styles"

export default function Hero({props}) {
    const baseClass = baseStyles()
    const classes = heroStyles()
    // come back and add links to aboutMe
    return (
        <div className={baseClass.root}>
            <div className={classes.titleDiv}>
                <h1 className={classes.name}>{props.title}</h1><p className={classes.jobTitle}>{props.jobTitle}</p>
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