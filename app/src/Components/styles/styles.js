import { makeStyles } from "@mui/styles";
// base styles (used for anything generic e.i parent divs and hrefs)
export const baseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "2400px",
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.base,
    },
  },
  inlineLink: {},
}));

// Hero styles
export const heroStyles = makeStyles((theme) => ({
  headerDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "40px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  indexList: {
    listStyleType: "lower-roman",
    listStylePosition: "inside",
    fontSize: "20px",
    padding: "24px",
    background: "#f2f2f2",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "100%",
      padding: "32px 0px",

      textAlign: "center",
    },
  },
  li: {
    margin: "8px 0",
  },
  titleDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 0px 30px 0",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  name: {
    fontSize: "64px",
    fontWeight: "700",
    color: theme.palette.primary.black,
    marginRight: "30px",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
      marginBottom: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "14px",
      fontSize: "52px",
    },
  },
  jobTitle: {
    fontWeight: "700",
    color: theme.palette.primary.white,
    padding: "6px 10px",
    fontSize: "12px",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    background: theme.palette.primary.black,
  },
  img: {
    maxWidth: "300px",
    borderRadius: "2px",
    border: "1px solid #313131",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  aboutMe: {
    fontSize: "22px",
  },
  aboutText: {
    lineHeight: "1.18",
  },
  aboutHeader: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  status: {
    margin: "30px 0",
    fontWeight: "600",
  },
}));

export const toolStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "2400px",
    width: "60%",
    padding: "5px",
    borderRadius: "68px",
    zIndex: "100",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      right: "10%",
      left: "10%",
      bottom: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      padding: "8px",
      borderRadius: "12px",
      bottom: "30px",
    },
    background: theme.palette.primary.black,
    position: "fixed",
    right: "20%",
    left: "20%",
    bottom: "50px",
  },
  toolBar: {
    width: "70%",
    height: "100%",
    display: "flex",
    margin: "auto",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
      overflowX: "scroll",
    },
  },

  timezone: {
    background: theme.palette.primary.lightBlack,
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    color: theme.palette.primary.white,
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  location: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "1px",
    fontSize: "14px",
    color: theme.palette.primary.white,
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  infoDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
      width: "100%",
    },
  },
  btnDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-apart",
      width: "100%",
    },
  },
  iconDiv: {
    borderRadius: "50%",
    padding: "10px",
    background: theme.palette.primary.lightBlack,
    "&:hover": {
      background: theme.palette.primary.black,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px",
    },
  },
  icon: {
    color: theme.palette.primary.white,
  },
}));

export const writingStyles = makeStyles((theme) => ({
  root: {
    margin: "100px auto",
  },
  title: {
    fontSize: "52px",
    fontWeight: "600",
  },
  readList: {
    margin: "30px 0px 10px 0px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  mainEssayCard: {
    width: "100%",
    padding: "20px",
    margin: "0 0 20px 0",
    borderRadius: "3px",
    background: theme.palette.primary.offWhite,
    border: `2px solid ${theme.palette.primary.offWhite}`,
    "&:hover": {
      transitionDelay: "80ms",
      border: `2px solid ${theme.palette.primary.black}`,
      background: theme.palette.primary.white,
    },
    [theme.breakpoints.down("md")]: {},
  },
  link: {
    color: theme.palette.primary.black,
    textDecoration: "none",
  },
  titleCard: {
    fontWeight: "600",
    fontSize: "32px",
    marginBottom: "15px",
  },
  descCard: {
    fontSize: "16px",
    marginBottom: "15px",
  },

  btn: {
    width: "220px",
    padding: "6px 0",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
    color: theme.palette.primary.white,
    background: theme.palette.primary.black,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      maxWidth: "180px",
      margin: "auto",
    },
  },

  //   styling elements for the Read component
}));

export const projectStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: "52px",
    fontWeight: "600",
  },
  projectList: {
    margin: "30px 0px",
  },
}));
