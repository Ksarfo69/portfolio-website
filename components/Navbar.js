import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Link href="/">
            <div className={styles.text}>
                Kwame Sarfo
            </div>
            </Link> 
        </div>
        <div className={styles.center}>
            <div className={styles.linkhover}>
                <Link href="/about">About</Link>
            </div>
            <div className={styles.linkhover}>
                <Link href="/projects">Projects</Link>
            </div>
            <div className={styles.linkhover}>
                <Link href="/resume">Resume</Link>
            </div>
        </div>
        <div className={styles.right}>
            <a href="https://github.com/Ksarfo69" target="_blank" rel="noreferrer">
                <Image className={styles.githubimg} src="/Img/Github.png" alt="" width={30} height={27}/>
            </a>
            <a href="https://www.linkedin.com/in/kwame-sarfo-91484933/" target="_blank" rel="noreferrer">
                <Image className={styles.linkedinimg} src="/Img/Linkedin.png" alt="" width={30} height={27}/>
            </a>
            <a href="mailto:ksarfo69@gmail.com" target="_blank" rel="noreferrer">
                <Image className={styles.mailimg} src="/Img/Mail.jpg" alt="" width={30} height={27}/>
            </a>
        </div>
    </div>
  )
}

export default Navbar