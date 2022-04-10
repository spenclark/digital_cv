import { useEffect } from "react"
import React, {useEffect} from "react"

export function Essay({props}) {
    useEffect(() => {
        document.title = `${props.title}`
        document
            .getElementsByTagName('meta')
            .namedItem('description')
            .setAttribute('content', props.paraprahps[0])
    })
    return (
        <div>
            <div>
                <a>Go to profile page</a>
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