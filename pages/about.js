import styles from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
    <Navbar/>
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <Image src="/Img/Aboutimg1.png" alt="" width={400} height={280} />
            </div>
        <div className={styles.center}>
            <h1 className={styles.h1text}>About</h1>
            <p className={styles.ptext}>I'm a self taught junior developer with 2 years of experience in my journey as a web developer.

                I'm a self-motivated learner with strong organisation, time management & communication skills.

                I'm able to work independently & collaboratively in a team with a meticulous attention to detail.
                </p>
        </div>
        <div className={styles.right}>
        <Image src="/Img/Aboutimg2.png" alt="" width={350} height={280} />
            </div>
    </div>
    </div>
  )
}

export default About