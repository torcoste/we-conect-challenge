export interface MenuItem {
  slug: string
  title: string
  url: string
  children?: MenuItem[]
}

export type MenuData = MenuItem[]
