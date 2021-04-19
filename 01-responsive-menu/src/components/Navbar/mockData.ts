import { MenuData, MenuItem } from "./types"

export const menuMockData: MenuData = [
  {
    slug: "we-conect",
    title: "We-Conect Home page",
    url: "https://www.we-conect.com/",
    children: [
      {
        slug: "live-events",
        title: "Live Event",
        url: "https://www.we-conect.com/liveevents",
      },
      {
        slug: "digital-managed-events",
        title: "Digital Managed Events",
        url: "https://www.we-conect.com/digital-managed-events",
      },
    ],
  },
  {
    slug: "google",
    title: "Google",
    url: "https://www.google.de",
  },
]

export const emptyMenuItem: MenuItem = {
  title: "",
  slug: "",
  url: "",
}
