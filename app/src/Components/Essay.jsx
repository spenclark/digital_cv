import { useEffect } from "react"
import React, {useEffect} from "react"
import { baseStyles } from "./styles/styles"
import { ClassNames } from "@emotion/react"

export function Essay({props}) {
    useEffect(() => {
        document.title = `${props.title}`
        document
            .getElementsByTagName('meta')
            .namedItem('description')
            .setAttribute('content', props.paraprahps[0])
    })
    const baseClass = baseStyles()
    return (
        <div className={baseClass.root}>
            <div style={{fontSize: "24px", margin: "40px 0"}}>
                <a href="/" className={baseClass.link}>Go to profile page</a>
            </div>
            <div>
                <div>
                    <h4>{props.title}</h4>
                    {props.paraprahps.map((e) => {
                        return(
                            <p>{e}</p>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}