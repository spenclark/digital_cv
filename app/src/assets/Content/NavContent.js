import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

export const navContent = {
  timezone: "UTC−08:00",
  location: "Canada",
  repoLink: "https://github.com/spenclark/digital_cv",
  buttons: [
    {
      icon: EmailIcon,
      action: () => (window.location = "mailto:spenclark@hotmail.com"),
    },
    {
      icon: GitHubIcon,
      action: () => (location.href = "https://github.com/spenclark"),
    },
    {
      icon: LinkedInIcon,
      action: () => (location.href = "https://www.linkedin.com/in/spenclark/"),
    },
  ],
};
