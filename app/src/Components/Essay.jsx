import { useEffect } from "react"
import React, {useEffect} from "react"

export function Essay({props}) {
    useEffect(() => {
        document.title = `${props.documentTitle}`
    })
    return (
        <div>
            
        </div>
    )
}