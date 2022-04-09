import React from "react"
import { baseStyles, projectStyles } from "./styles/styles"

function ProjectCard({e, i}) {
    const classes = projectStyles()

    const checkEven = (index) => {
        if(index % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className={checkEven(i) ? classes.evenCard : classes.oddCard }>
            <div>
                <img className={classes.img} src={e.screenshot} alt={`${e.name} screenshot`}/>
            </div>
            <div>
                <p>
                    {e.name}
                </p>
                <p>
                    {e.desc}
                </p>
            </div>
        </div>
    )
}

export default function Projects({props}) {
    const baseClass = baseStyles()
    const classes = projectStyles()

    const subList = [...props.newsletters, ...props.otherProjects]

    function newTab(props) {
        const url = `https://${props}`;
        window.open(url, "_blank").focus();
      }

    return (
        <div className={baseClass.root}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes.projectList}>
                    <div>
                        {props.mainProjects.map((e, i) => {
                            return (
                                <ProjectCard e={e} i={i} />
                            )
                        })  }
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