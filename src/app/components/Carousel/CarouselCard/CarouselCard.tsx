import Image from 'next/image'
import styles from './carousel-card.module.css'

import football from '../../../../../public/imgs/back.png'


export const CarouselCard = () => {
    return (
        <div className={styles["card-carousel"]}>
            <div className={styles["card-carousel__content"]}>
                <h3 className={styles["card-carousel__content__title"]}>Futbol</h3>
                <p className={styles["card-carousel__content__pg"]}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad molestiae provident
                </p>
            </div>
            <div className={styles["card-carousel__image"]}>
                {/* <img className={styles["card-carousel__image__img"]} src="'../../../../../public/imgs/back.png" alt="cat" /> */}
                <Image src={football} className={styles["card-carousel__image__img"]} alt=''/>
            </div>
        </div>
    )
}
