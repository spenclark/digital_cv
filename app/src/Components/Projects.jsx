import React from "react"
import { baseStyles, projectStyles } from "./styles/styles"

export default function Projects({props}) {
    const baseClass = baseStyles()
    const classes = projectStyles()

    const subList = [...props.newsletters, ...props.otherProjects]

    function newTab(props) {
        const url = `https://${props}`;
        window.open(url, "_blank").focus();
      }

    //   name: "OfferArb",
    //   desc: "Salary and offer transparency for the finance industry.",
    //   url: "offerarb.com",
    //   techStack: "Python, React, Node, Redux, Postgres",
    //   screenshot: "",

    return (
        <div className={baseClass.root}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes.projectList}>
                    <div>
                        
                    </div>
                    <div>
                        <div className={classes.subTitle}>
                            Newsletters & Other Projects
                        </div>
                        <div className={classes.otherProjectDiv}>
                            {subList.map((e) => {
                                return (
                                    <a key={e.name} 
                                    onClick={() => newTab(e.name)} className={classes.other}>{e.name}</a>
                                )
                            })}

                        </div>
                    </div>
                    <a href={props.thisRepoLink} style={{fontSize: "18px"}} className={baseClass.link}>
                        See the repo for this page
                    </a>
                </div>
        </div>
    )
}