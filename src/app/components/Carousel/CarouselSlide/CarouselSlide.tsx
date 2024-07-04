import { CarouselCard } from "../CarouselCard/CarouselCard"
import style from './carousel-slide.module.css'
import { cardData } from "../../types.module"
import React from "react"


interface Props {
    cardData: cardData
}

export const CarouselSlide: React.FC<Props> = ({cardData}) => {



    return (
        <div className={style.slide} >
            <CarouselCard cardData={cardData}/>
        </div>
    )
}
