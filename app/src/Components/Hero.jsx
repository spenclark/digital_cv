import React, {useRef, useLayoutEffect, useEffect} from "react"
import {baseStyles, heroStyles} from "./styles/styles"
import "../App.css"

const indexList = [{
    name: "About me",
    to: "#about"
},{
    name: "Writing",
    to: "#writing"
},{
    name: "Projects",
    to: "#projects"
}]

export default function Hero({props}) {
    const baseClass = baseStyles()
    const classes = heroStyles()
    const aboutMeAsString = `${props.aboutMe}`

    function styleLinks() {
       const items = document.getElementsByName('aboutLink')
       function changeStyle(arr){
           var color = "#3177e0"
            for(var i=0, len=arr.length; i<len; i++) {
                arr[i].style["color"] = color;
                arr[i].style["text-decoration"] = "none";
            }
        }
       changeStyle(items);
    }
    
    useEffect(() => (
        styleLinks()
    ))

    function IndexList({props}) {
        const classes = heroStyles()
        const baseClass = baseStyles()

        return (
            <ul className={classes.indexList}>
                <p style={{fontWeight: "600", textAlign: "center"}}>Index</p>
                {props.map((e) => {
                    return (
                    <a key={e.name} className={baseClass.link} href={e.to}>
                        <li  className={classes.li}>
                            {e.name}
                        </li>
                    </a>
                    )
                })}
            </ul>

        )
    }

    return (
        <div className={baseClass.root}>
            <div className={classes.headerDiv}>
                <img className={classes.img} src={props.pfp} id="unselectable" alt="Profile Picture" />
                <IndexList props={indexList} />
            </div>
            <div className={classes.titleDiv} id="about">
                <h1 className={classes.name}>{props.title}</h1><p className={classes.jobTitle}  id="unselectable" >{props.jobTitle}</p>
            </div>
            <div className={classes.aboutMe} >
                <div className={classes.aboutHeader} >
                    <p className={classes.aboutText} dangerouslySetInnerHTML={{ __html: aboutMeAsString}}></p>
                </div>
                <div className={classes.status}>
                    <p>{props.employmentStatus}</p>
                </div>
            </div>
        </div>
    )
}