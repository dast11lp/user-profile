import Image, { StaticImageData } from 'next/image'
import styles from './carousel-card.module.css'

import football from '../../../../../public/imgs/back.png'
import React from 'react'
import { cardData } from '../../types.module'

interface Props {
    cardData: cardData
}



export const CarouselCard: React.FC<Props> = ({cardData}) => {
    return (
        <div className={styles["card-carousel"]}>
            <div className={styles["card-carousel__content"]}>
                <h3 className={styles["card-carousel__content__title"]}>{cardData.title}</h3>
                <p className={styles["card-carousel__content__pg"]}>
                    {cardData.paragraph}
                </p>
            </div>
            <div className={styles["card-carousel__image"]}>
                <Image src={cardData.image} className={styles["card-carousel__image__img"]} alt=''/>
            </div>
        </div>
    )
}
