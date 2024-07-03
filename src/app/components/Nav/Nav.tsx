'use client'
import React from 'react'
import styles from './nav.module.css'
import { links } from '../types.module'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface props {
    links: links[] | null
}

const Nav:React.FC<props> = ({links}) => {
    const pathname = usePathname();
    return (
        <div className={styles.nav__left__navlinks}>
            <ul className={styles.nav__left__navlinks__links}>
                {links && links.map((link, i) => (
                    <li key={i}><Link className={pathname === link.href ? styles.active : ''} href={link.href}>{link.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Nav
