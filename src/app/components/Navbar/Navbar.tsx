// 'use client'

import React, { useState } from "react";
import styles from './navbar.module.css'
import { links } from "../types.module";
import Link from "next/link";

interface props {
    links: links[] | null
}


export const Navbar: React.FC<props> = ({ links }) => {
    // const [OpenMenu, setOpenMenu] = useState(false);

    return (
        //   <div className={styles.navbar}>
        //       <div className={styles.navbar__nav}>
        //           <div className={styles.navbar__nav__left}>
        //               <div className={styles.navbar__nav__left__brand}>
        //                   {/* <svg></svg> */}
        //                   <Link className={styles.navbar__nav__left__brand__name} href="/login">ScrumProject</a>
        //               </div>
        //               <div className={styles.navbar__nav__left__as}>
        //                   <ul className={styles.navbar__nav__left__navlinks__links}>
        //                       <li> <Link href="#">Option</a></li>
        //                       <li> <Link href="#">Option</a></li>
        //                       <li> <Link href="#">Option</a></li>
        //                       <li> <Link href="#">Option</a></li>
        //                   </ul>
        //               </div>
        //           </div>

        //           <div className={styles.navbar__nav__right}>
        //               <div className={styles.navbar__nav__right__user}>
        //                   <div className={styles.navbar__nav__right__user__button} onClick={() => setOpenMenu(!OpenMenu)}>
        //                       <img src="" alt="user" />
        //                   </div>
        //                   {/* <div className={`navbar__nav__right__user__menu ${OpenMenu && 'active'}`} >
        //                       <Link href="/login">Cerrar Sesión</a>
        //                   </div> */}
        //               </div>  
        //           </div>

        //       </div>
        //   </div>

        //////////////////////////////
        <div className={styles.navbar}>
            <div className={styles.navbar__nav}>
                <div className={styles.navbar__nav__left}>
                    <div className={styles.navbar__nav__left__brand}>
                        {/* <svg></svg> */}
                        <div className={styles.navbar__nav__left__brand__name}>
                            <h2>Daniel López</h2>
                            <h5>Ingeniero de sistemas</h5>
                        </div>

                        {/* <Link className={styles.navbar__nav__left__brand__name} href="/login">ScrumProject</a> */}
                    </div>
                    <div className={styles.navbar__nav__left__navlinks}>
                        <ul className={styles.navbar__nav__left__navlinks__links}>
                            {links && links.map((link, i) => (
                                <li key={i}><Link href={link.href}>{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.navbar__nav__right}>
                    <div className={styles.navbar__nav__right__user}>
                        {/* <div className={styles.navbar__nav__right__user__button} onClick={() => setOpenMenu(!OpenMenu)}>
                            <img src="" alt="user" />
                        </div> */}
                        {/* <div className={`navbar__nav__right__user__menu ${OpenMenu && 'active'}`} >
                          <Link href="/login">Cerrar Sesión</a>
                      </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}