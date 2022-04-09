import React, {useEffect, useState} from "react"
import { baseStyles, writingStyles } from "./styles/styles"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Writing({props}) {
    const baseClass = baseStyles()
    const classes = writingStyles()

    return (
        <div className={baseClass.root} id="writing">
            <div className={classes.root}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes.readList}>
                    {props.document.map((e, i) => {
                        return (
                            <a key={i} href={`/${e.id}`} className={classes.link}>
                                <div className={classes.mainEssayCard} >
                                    <div>
                                        {/* illustrations? */}
                                    </div>
                                    <div className={classes.titleCard}>
                                        {e.title}
                                    </div>
                                    <div className={classes.descCard}>
                                        {`${e.paragraphs[0]}`}
                                    </div>
                                    <div className={classes.btn}>
                                        Continue Reading
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