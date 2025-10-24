import { FaTwitch, FaInstagram, FaDiscord } from "react-icons/fa6"

const CONFIG = {
  socialLinks: [
    { href: "https://www.instagram.com/longhorn_lol", icon: FaInstagram },
    { href: "https://discord.com/invite/s7W7Rg7AcW", icon: FaDiscord },
    { href: "https://www.twitch.tv/longhorn_lol", icon: FaTwitch },
  ],
  developerHref: "https://docs.longhornlol.com/",
  threshold: 200,
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
}

export default CONFIG
