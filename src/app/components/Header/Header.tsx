import Image from 'next/image';
import style from './header.module.css'
import { Navbar } from '../Navbar/Navbar';
import About from '../about/About';

import twiterImg from '../../../../public/icons/twitter.svg'
import instagramImg from '../../../../public/icons/instagram.svg'
import facebookImg from '../../../../public/icons/facebook.svg'

const Header = () => {

  const links1 = [
    { name: 'Home', href: '/dashboard', icon: 'HomeIcon' },
    { name: 'Invoices', href: '/dashboard/invoices', icon: 'DocumentDuplicateIcon', },
    { name: 'Customers', href: '/dashboard/customers', icon: 'UserGroupIcon' },
  ];

  const links2 = [
    { name: 'Info', href: '/', icon: 'DocumentDuplicateIcon', },
    { name: 'Intereses', href: '/interests', icon: 'HomeIcon' },
    { name: 'Contacto', href: '/contact', icon: 'DocumentDuplicateIcon', },
  ];

  const icons: any[] = [twiterImg, instagramImg, facebookImg]

  return (
    <header className={style.header__background}>
      <Navbar links={null} title='Profile' subtitle={null} img={false}/>
      <div className={style.header__content}>
        <div className={style.header__content__resume}>
          <About />
        </div>
        <Navbar links={links2} title='Johana Doe' subtitle={'Ingeniera de sistemas'} img={true}/>
      </div>
    </header>
  );
};

export default Header;
