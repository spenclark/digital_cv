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

    const renderList = (arr) => {
        
    }
    return (
    
        <div className={checkEven(i) ? classes.evenCard : classes.oddCard }>
            <div className={classes.contentDiv}>
                <img className={classes.img} src={e.screenshot} alt={`${e.name} screenshot`}/>
            </div>
            <div className={classes.textDiv}>
                <p className={classes.prodName}>
                    {e.name} <span><a className={classes.prodUrl}href={`https://${e.url}`} target="_blank">{`https://${e.url}`}</a></span>
                </p>
                <p className={classes.prodDesc}>
                    {e.desc}
                </p>
                <p>
                   <span>Technology Stack:</span>
                </p>
            </div>
        </div>
    )
}

export default function Projects({props}) {
    const baseClass = baseStyles()
    const classes = projectStyles()

    const subList = [...props.newsletters, ...props.otherProjects]

    return (
        <div className={baseClass.root} id="projects">
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
                                    href={`http://${e.name}`
                                } target="_blank" className={classes.other}>{e.name}</a>
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