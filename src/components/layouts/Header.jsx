import Nav from './Nav';
import styles from './Header.module.css'; 

const Header = () => {
return (
    <header className={styles.header}>
    <div className={styles.logo}>
        <h2>Talento tech S.A</h2>
    </div>
    <Nav />
    </header>
);
};

export default Header;