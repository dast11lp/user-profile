import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";

import home from './../../public/icons/home.svg'
import student from './../../public/icons/student.svg'
import flag from './../../public/icons/flag.svg'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.data}>
        <Image src={student} alt="student" width={30} className={styles.data__image}/>
        <p>Graduado en la Universidad de la Vida</p>
      </div>
      <div className={styles.data}>
        <Image src={flag} alt="country" width={30} className={styles.data__image}/>
        <p>País de las maravillas</p>
      </div>
      <div className={styles.data}>
        <Image src={home} alt="home" width={30} className={styles.data__image}/>
        <p>Vivo cerca de la rivera del arauca</p>
      </div>
    </div>
  );
}
