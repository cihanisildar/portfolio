import { SiGithub, SiX } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

export const socialLinks = [
  { label: "github", href: "https://github.com/cihanisildar", icon: SiGithub, color: "#9B6DFF" },
  { label: "linkedin", href: "https://linkedin.com/in/cihanisildar", icon: FaLinkedinIn, color: "#0A66C2" },
  { label: "twitter", href: "https://x.com/cihanolmalibu", icon: SiX, color: "#1D9BF0" },
];

/* the ways to reach me — each one drawn as a dock tile on the
   contact page, so tile + glyph follow the same rule as the toolkit. */
export const contactLinks = [
  {
    label: "Email",
    href: "mailto:cihan.isildar@outlook.com",
    handle: "cihan.isildar@outlook.com",
    icon: LuMail,
    tile: "#1c6cf5",
    glyph: "#ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/cihanisildar",
    handle: "in/cihanisildar",
    icon: FaLinkedinIn,
    tile: "#0a66c2",
    glyph: "#ffffff",
  },
  {
    label: "GitHub",
    href: "https://github.com/cihanisildar",
    handle: "github.com/cihanisildar",
    icon: SiGithub,
    tile: "#181717",
    glyph: "#ffffff",
  },
  {
    label: "X",
    href: "https://x.com/cihanolmalibu",
    handle: "@cihanolmalibu",
    icon: SiX,
    tile: "#000000",
    glyph: "#ffffff",
  },
];
