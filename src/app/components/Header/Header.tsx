import Image from 'next/image';
import style from './header.module.css'
import { Navbar } from '../Navbar/Navbar';
import About from '../about/About';

const Header = () => {

  const links1 = [
    { name: 'Home', href: '/dashboard', icon: 'HomeIcon' },
    { name: 'Invoices', href: '/dashboard/invoices', icon: 'DocumentDuplicateIcon', },
    { name: 'Customers', href: '/dashboard/customers', icon: 'UserGroupIcon' },
  ];

  const links2 = [
    { name: 'Intereses', href: '/interests', icon: 'HomeIcon' },
    { name: 'Contacto', href: '/contact', icon: 'DocumentDuplicateIcon', },
  ];

  return (
    <header className={style.header__background}>
      <Navbar links={null} />
      <div className={style.header__content}>
        <div className={style.header__content__resume}>
          <About />
          {/* <Image src={profilePic} alt="Profile Picture" width={50} height={50} /> */}
        </div>
        {/* <div className={style.header__content__data}> */}
        {/* <h1>Daniel López</h1>
          <h2>Ingeniero de sistemas</h2> */}
        <Navbar links={links2}/>
        {/* </div> */}
      </div>

    </header>
  );
};

export default Header;
