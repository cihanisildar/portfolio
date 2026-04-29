import { SiGithub, SiX, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export const socialLinks = [
  { label: "github", href: "https://github.com/cihanisildar", icon: SiGithub, color: "#9B6DFF" },
  { label: "linkedin", href: "https://linkedin.com/in/cihanisildar", icon: FaLinkedinIn, color: "#0A66C2" },
  { label: "twitter", href: "https://x.com/cihanolmalibu", icon: SiX, color: "#1D9BF0" },
];

export const contactLinks = [
  {
    label: "email",
    href: "mailto:cihan.isildar@outlook.com",
    description: "cihan.isildar@outlook.com",
    icon: SiGmail,
    color: "#EA4335",
    bg: "rgba(234,67,53,0.10)",
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/cihanisildar",
    description: "in/cihanisildar",
    icon: FaLinkedinIn,
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.10)",
  },
  {
    label: "github",
    href: "https://github.com/cihanisildar",
    description: "github.com/cihanisildar",
    icon: SiGithub,
    color: "#9B6DFF",
    bg: "rgba(155,109,255,0.10)",
  },
  {
    label: "twitter",
    href: "https://x.com/cihanolmalibu",
    description: "@cihanolmalibu",
    icon: SiX,
    color: "#1D9BF0",
    bg: "rgba(29,155,240,0.10)",
  },
];
