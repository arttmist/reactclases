import styles from './Nav.module.css';

const Nav = () => {
return (
    <nav className={styles.navContainer}>
    <ul className={styles.navList}>
        <li>
        <a to="/tecnologia" className={styles.navLink}>
        Electronicos
        </a>
        </li>
        <li>
        <a to="/moda" className={styles.navLink}>
            Ropa
        </a>
        </li>
        <li>
        <a to="/moda" className={styles.navLink}>
            Accesorios
        </a>
        </li>
    </ul>
    </nav>
);
}

export default Nav;