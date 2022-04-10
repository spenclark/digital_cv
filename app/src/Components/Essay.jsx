import { useEffect } from "react"
import React, {useEffect} from "react"
import { baseStyles, writingStyles } from "./styles/styles"

export function Essay({props}) {
    useEffect(() => {
        document.title = `${props.title}`
        document
            .getElementsByTagName('meta')
            .namedItem('description')
            .setAttribute('content', props.paraprahps[0])
    })
    const baseClass = baseStyles()
    const classes = writingStyles()
    return (
        <div className={baseClass.root}>
            <div style={{fontSize: "24px", margin: "40px 0"}}>
                <a href="/" className={baseClass.link}>Go to profile page</a>
            </div>
            <div style={{margin: "0px 0 40px", padding: "10px"}}>
                <div style={{fontFamily: "'Tinos', serif", fontSize: "14px"}}>
                    <h4 style={{fontWeight: "600"}}>{props.title}</h4>
                    {props.paraprahps.map((e) => {
                        return(
                            <p style={{margin: "12px 0"}}>{e}</p>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}