import Image from 'next/image';
import profilePic from '../../../../public/imgs/profile.jpg';
import styles from './about.module.css'


const About = () => {
    return (
        <section className={styles.about}>
            <div style={{ width: '280px', height: '420px', position: 'relative' }}>
                <Image
                    src={profilePic}
                    alt="Profile Picture"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                />
            </div>
            <div className={styles.about__content}>
                <h2>About Me</h2>
                <p className={styles.about__pg}>Hi, I'm John Doe, a web developer with a passion for creating amazing web experiences. like music like rock alternative, watch football matches, play videogames.</p>
            </div>
        </section>
    );
};

export default About;