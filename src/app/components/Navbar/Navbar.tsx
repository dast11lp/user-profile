// 'use client'

import React, { useState } from "react";
import styles from './navbar.module.css'
import { links } from "../types.module";
import Link from "next/link";
import Nav from "../Nav/Nav";

interface props {
    links: links[] | null
}


export const Navbar: React.FC<props> = ({ links }) => {
    // const [OpenMenu, setOpenMenu] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__nav}>
                <div className={styles.navbar__nav__left}>
                    <div className={styles.navbar__nav__left__brand}>
                        <div className={styles.navbar__nav__left__brand__name}>
                            <h2>Johana Doe</h2>
                            <h5>Ingeniera de sistemas</h5>
                        </div>
                    </div>
                   

                    <Nav links={links}/>
                </div>

                <div className={styles.navbar__nav__right}>
                    <div className={styles.navbar__nav__right__user}>
                    </div>
                </div>

            </div>
        </div>
    )
}