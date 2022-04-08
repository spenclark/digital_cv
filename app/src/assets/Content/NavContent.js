import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

function mailTo() {
  window.location = "mailto:spenclark@hotmail.com";
}

function githubRef() {
  url = "https://github.com/spenclark";
  window.open(url, "_blank").focus();
}

function linkedRef() {
  url = "https://www.linkedin.com/in/spenclark/";
  window.open(url, "_blank").focus();
}

export const navContent = {
  timezone: "UTC−08:00",
  location: "Canada",
  repoLink: "https://github.com/spenclark/digital_cv",
  buttons: [
    {
      icon: EmailIcon,
      action: mailTo,
    },
    {
      icon: GitHubIcon,
      action: githubRef,
    },
    {
      icon: LinkedInIcon,
      action: linkedRef,
    },
  ],
};
