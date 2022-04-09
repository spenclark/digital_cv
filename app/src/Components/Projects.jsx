import React from "react"
import { baseStyles, projectStyles } from "./styles/styles"

export default function Projects({props}) {
    const baseClass = baseStyles()
    const classes = projectStyles()
    return (
        <div className={baseClass.root}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes.projectList}>

                <a href={props.thisRepoLink} style={{fontSize: "18px"}} className={baseClass.link}>
                    See the repo for this page
                </a>
                </div>

        </div>
    )
}