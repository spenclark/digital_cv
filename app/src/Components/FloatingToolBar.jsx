import {toolStyles} from "./styles/styles"
function FloatingToolBar({props}) {
    const classes = toolStyles()

    return (
        <div className={classes.root}>
            <div className={classes.toolBar}>
                <div className={classes.infoDiv}>
                    <div className={classes.timezone}>
                        <p style={{fontWeight: "600", paddingBottom: "3px"}}>Timezone:</p>
                        <p>{props.timezone}</p>
                    </div>
                    <div className={classes.location}>
                        <p style={{fontWeight: "600", paddingBottom: "3px"}}>Location:</p>
                        <p>{props.location}</p>
                    </div>
                </div>
                <div className={classes.btnDiv}>
                    {props.buttons.map((e, i) => {
                        return (
                            <div key={i} className={classes.iconDiv} onClick={() => props.action}>
                                <e.icon className={classes.icon} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FloatingToolBar