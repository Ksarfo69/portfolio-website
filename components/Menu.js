import styles from '../styles/Menu.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import MenuLinks from './MenuLinks';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

const Menu = () => {

    const [openMenu, setopenMenu] = useState(false);

    const toggleMenu = () => {
        setopenMenu(!openMenu)
    }

  return (
      <div>
      
    <div className={styles.container}>
        <div className={styles.iconholder}>
            { openMenu? <CloseIcon onClick={()=>toggleMenu()} style={{width: "50px", height: "50px", color: "white"}} data-testid="closeicon"/> 
            : <MenuIcon onClick={()=>toggleMenu()} style={{width: "50px", height: "50px", color: "white"}} data-testid="menuicon"/>}
        </div>
    </div>
    {openMenu && <div data-testid="links"><MenuLinks setopenMenu={setopenMenu} /> </div>} 
    </div>
  )
}

export default Menu