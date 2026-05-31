export interface Property {
  id: string
  title: string
  location: string
  price: string
  area: string
  type: "office" | "retail" | "warehouse" | "coworking"
  tag: "For Sale" | "For Lease"
  image: string
}