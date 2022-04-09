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
  linkSpan: {},
}));

// Hero styles
export const heroStyles = makeStyles((theme) => ({
  titleDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 0px 50px 0",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      whiteSpace: "normal",
    },
  },
  name: {
    fontSize: "64px",
    fontWeight: "700",
    color: theme.palette.primary.black,
    marginRight: "30px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
      marginBottom: "14px",
    },
  },
  jobTitle: {
    fontWeight: "700",
    color: theme.palette.primary.main,
    padding: "6px 10px",
    fontSize: "12px",
    borderRadius: "30px",
    background: theme.palette.primary.black,
    whiteSpace: "nowrap",
  },
  img: {
    maxWidth: "300px",
    borderRadius: "2px",
    border: "1px solid #313131",
    margin: "40px 40px 40px 0px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  aboutMe: {
    fontSize: "20px",
  },
  aboutHeader: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  aboutText: {},
  status: {},
}));
