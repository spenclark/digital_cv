import React from "react"
import { baseStyles, writingStyles } from "./styles/styles"

function Writing({props}) {
    const baseClass = baseStyles()
    const classes = writingStyles()
    return (
        <div className={baseClass.root}>
            <div className={classes.root}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes.readList}>
                    {props.document.map((e) => {
                        return (
                            <a href={`/${e.id}`} className={baseClass.link}>
                                <div>
                                    <div>
                                        {e.title}
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Writing