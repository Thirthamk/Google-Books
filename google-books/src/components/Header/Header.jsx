import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.headerColor}>
            <header>
                <h1 className={styles.h1}> Google Book Cards</h1>
            </header>
        </div>
    );
};

export default Header;

// <i class="fa-thin fa-books"></i> have to install font awesome package to make it work
