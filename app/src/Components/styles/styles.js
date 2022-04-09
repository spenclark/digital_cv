import { makeStyles } from "@mui/styles";
// base styles
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
}));

// Hero styles

export const heroStyles = makeStyles((theme) => ({
  titleDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "100px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  name: {
    fontSize: "56px",
    fontWeight: "700",
    color: theme.palette.primary.black,
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },
  jobTitle: {
    fontWeight: "600",
    background: theme.palette.primary.black,
  },
}));
