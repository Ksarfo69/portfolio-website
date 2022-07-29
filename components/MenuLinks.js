import React from 'react'
import Link from 'next/link'
import styles from '../styles/MenuLinks.module.css'

const MenuLinks = (props) => {
  return (
    <div className={styles.container} data-testid="container">
        <div onClick={()=>props.setopenMenu(false)} className={styles.linkhover}>
            <Link href="/">Home</Link>
        </div>
        <div onClick={()=>props.setopenMenu(false)} className={styles.linkhover}>
            <Link href="/about">About</Link>
        </div>
        <div onClick={()=>props.setopenMenu(false)} className={styles.linkhover}>
            <Link href="/projects">Projects</Link>
        </div>
        <div onClick={()=>props.setopenMenu(false)} className={styles.linkhover}>
            <Link href="/resume">Resume</Link>
        </div>
    </div>
  )
}

export default MenuLinks