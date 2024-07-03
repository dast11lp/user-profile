import { CarouselCard } from "../CarouselCard/CarouselCard"
import style from './carousel-slide.module.css'

import anime from '../../../../../public/imgs/goku.png'
import development from '../../../../../public/imgs/javascript.png'
import football from '../../../../../public/imgs/back.png'
import { cardData } from "../../types.module"
import React from "react"


interface Props {
    cardData: cardData
}

export const CarouselSlide: React.FC<Props> = ({cardData}) => {



    return (
        // <div className={style.slide} >
        <div className={style.slide} >
            <CarouselCard cardData={cardData}/>
        </div>
    )
}
