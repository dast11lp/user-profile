import { StaticImageData } from "next/image"

export interface links{ 
    name: string, 
    href: string, 
    icon: string | null, 
}

export interface cardData{
    title: string
    paragraph: string,
    image: StaticImageData
}