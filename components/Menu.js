import styles from '../styles/Menu.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import MenuLinks from './MenuLinks';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {

    const [openMenu, setopenMenu] = useState(false);

    const toggleMenu = () => {
        setopenMenu(!openMenu)
    }

  return (
      <div>
      
    <div className={styles.container}>
        <div className={styles.iconholder}>
            { openMenu? <CloseIcon onClick={()=>toggleMenu()} style={{width: "50px", height: "50px", color: "white"}}/> 
            : <MenuIcon onClick={()=>toggleMenu()} style={{width: "50px", height: "50px", color: "white"}}/>}
        </div>
    </div>
    {openMenu && <MenuLinks setopenMenu={setopenMenu}/> }
    </div>
  )
}

export default Menu