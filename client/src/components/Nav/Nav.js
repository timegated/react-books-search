import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
const nav = () => {
    return (
        <header className={style.headerContent}>
            <nav className={style.navBar}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to="/saved">Saved Books</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default nav;