import { makeStyles } from "@mui/styles";
// base styles (used for anything generic e.i parent divs and hrefs)
export const baseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1600px",
    width: "60%",
    margin: "auto",
    minWidth: "800px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      maxWidth: "0",
      minWidth: "80%",
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
  written: {
    fontFamily: "'Tinos', serif",
    lineHeight: "1.2",
    fontSize: "24px",
  },
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
    maxWidth: "1600px",
    width: "60%",
    minWidth: "800px",
    padding: "5px",
    borderRadius: "68px",
    zIndex: "100",
    background: theme.palette.primary.black,
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "50px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      right: "10%",
      left: "10%",
      bottom: "40px",
      transform: "translateX(0%)",
      minWidth: "0",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      padding: "8px",
      borderRadius: "12px",
      bottom: "30px",
    },
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
    color: theme.palette.primary.offWhite,
    "&:hover": {
      background: theme.palette.primary.black,
      color: theme.palette.primary.white,
      opacity: "0.9",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px",
    },
  },
  icon: {
    color: "inherit",
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
      boxShadow:
        "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)",
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
    marginBottom: "10px",
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
    "&:hover": {
      opacity: "0.9",
    },
  },

  //   styling elements for the Read component
}));

export const projectStyles = makeStyles((theme) => ({
  title: {
    fontSize: "52px",
    fontWeight: "600",
  },
  subTitle: {
    fontSize: "32px",
    fontWeight: "600",
  },
  projectList: {
    margin: "30px 0px 160px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "30px 0px 120px",
    },
  },
  otherProjectDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "40px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  other: {
    background: theme.palette.primary.offWhite,
    color: theme.palette.primary.black,
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "600",
    margin: "0px 8px 8px 0px",
    borderRadius: "4px",
    padding: "8px 12px",
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.base,
    },
    [theme.breakpoints.down("md")]: {
      margin: "0px 6px 6px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0px 6px",
    },
  },

  //   For main projectCards
  evenCard: {
    width: "100%",
    borderRadius: "4px",
    maxWidth: "100%",
    margin: "20px 0 80px",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    padding: "30px",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: "30px",
      margin: "0 0 40px",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  oddCard: {
    width: "100%",
    borderRadius: "4px",
    maxWidth: "100%",
    margin: "0 0 80px",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "reverse",
    justifyContent: "space-between",
    padding: "30px",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: "30px",
      margin: "0 0 40px",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  img: {
    width: "100%",
    borderRadius: "4px",
    border: "1px solid grey",
  },
  imgCover: {},
  contentDiv: {
    width: "49%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  textDiv: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 0 30px",
    },
  },
  prodName: {
    fontSize: "32px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "0.6",
      display: "flex",
      flexDirection: "column",
    },
  },
  prodUrl: {
    fontSize: "12px",
    fontWeight: "500",
    marginBottom: "10px",
    color: theme.palette.primary.base,
  },
  prodDesc: {
    lineHeight: "1.1",
    fontSize: "20px",
    margin: "10px 0",
  },
}));
