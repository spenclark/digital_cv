import React, {useEffect} from "react"
import { baseStyles, writingStyles } from "./styles/styles"

export function Essay({props}) {
    useEffect(() => {
        document.title = `${props.title}`
        document
            .getElementsByTagName('meta')
            .namedItem('description')
            .setAttribute('content', props.paragraphs[0])
    })
    
    const baseClass = baseStyles()

    return (
        <div className={baseClass.root}>
            <div style={{fontSize: "24px", margin: "40px 0"}}>
                <a href="/" className={baseClass.link}>Go to profile page</a>
            </div>
            <div style={{margin: "0px 0 40px"}}>
                <div className={baseClass.written}>
                    <h4 style={{fontWeight: "600"}}>{props.title}</h4>
                    {props.paragraphs.map((e) => {
                        return(
                            <p style={{margin: "12px 0", fontSize: "18px", lineHeight: "1.2"}}>{e}</p>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}