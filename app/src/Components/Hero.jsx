import React from "react"
import {baseStyles, heroStyles} from "./styles/styles"

function indexList({props}) {
    const classes = heroStyles()
    return (
        <ul>
            {props.map((e) => {
                return (
                    <li key={e}>
                        {e}
                    </li>
                )
            })}
        </ul>

    )
}

export default function Hero({props}) {
    const baseClass = baseStyles()
    const classes = heroStyles()
    // come back and add links to aboutMe
    return (
        <div className={baseClass.root}>
            <div>
                <img className={classes.img} src={props.pfp} alt="Profile Picture" />
                <IndexList />
            </div>
            <div className={classes.titleDiv}>
                <h1 className={classes.name}>{props.title}</h1><p className={classes.jobTitle}>{props.jobTitle}</p>
            </div>
            <div className={classes.aboutMe}>
                <div className={classes.aboutHeader}>
                    <p className={classes.aboutText}>{props.aboutMe}</p>
                </div>
                <div className={classes.status}>
                    <p>{props.employmentStatus}</p>
                </div>
            </div>
        </div>
    )
}