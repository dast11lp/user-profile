import React from "react";
import styles from './navbar.module.css'
import { links } from "../types.module";
import Nav from "../Nav/Nav";

import twiterImg from '../../../../public/icons/twitter.svg'
import instagramImg from '../../../../public/icons/instagram.svg'
import facebookImg from '../../../../public/icons/facebook.svg'
import Image from "next/image";

interface props {
    links: links[] | null
    title: string
    subtitle: string | null
    img: boolean
}



export const Navbar: React.FC<props> = ({ links, title, subtitle, img }) => {
    // const [OpenMenu, setOpenMenu] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__nav}>
                <div className={styles.navbar__nav__left}>
                    <div className={styles.navbar__nav__left__brand}>
                        <div className={styles.navbar__nav__left__brand__name}>
                            <h2>{title}</h2>
                            <h5>{subtitle}</h5>
                        </div>
                    </div>


                    <Nav links={links} />
                </div>

                <div className={styles.navbar__nav__right}>
                    <div className={styles.navbar__nav__right__user}>
                        {img && <>
                            <a href="https://x.com/" target="_blank">
                                <Image src={twiterImg} width={25} alt="" style={{ padding: '5px' }} />
                            </a>
                            <a href="https://web.facebook.com/" target="_blank">
                                <Image src={facebookImg} width={25} alt="" style={{ padding: '5px' }} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <Image src={instagramImg} width={25} alt="" style={{ padding: '5px' }} />
                            </a>
                        </>}
                    </div>
                </div>

            </div>
        </div>
    )
}