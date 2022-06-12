import styles from '../styles/Menu.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
  return (
    <div className={styles.container}>
        <div className={styles.iconholder}><MenuIcon style={{width: "50px", height: "50px", color: "white"}}/></div>
    </div>
  )
}

export default Menu