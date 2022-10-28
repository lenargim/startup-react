import React from 'react';
import styles from './styles.module.sass'
import {Link} from "react-router-dom";
import useCheckScreen from "../../../handlers/handler";
import SvgLogo from "./Logo/SvgLogo";
import SvgCopy from "../../Svg/Copy";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.part}>
                        <Link to={'/'} className={styles.logo}>
                            {!useCheckScreen(1023) ? <SvgLogo/> : <SvgCopy/>}
                        </Link>
                    </div>
                    <nav className={[styles.part, styles.nav].join(' ')}>
                        <li><a href="#" className={styles.link}>Все проекты</a></li>
                        <li><a href="#" className={styles.link}>Криптопроекты</a></li>
                    </nav>
                    <div className={[styles.part, styles.rightside].join(' ')}>
                        <div className={styles.itemWrap}>
                            <div className={styles.item}>
                                <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="11 8 0 4 11 0 22 4"></polygon>
                                    <polygon opacity="0.6" points="11 8.25 22 4 11 21"></polygon>
                                    <polygon opacity="0.8" points="11 8.25 0 4 11 21"></polygon>
                                </svg>
                            </div>
                        </div>
                        <Link to={'/create-project'} className="add button">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10,0 L10,5.999 L16,6 L16,10 L10,10 L10,16 L6,16 L6,10 L0,10 L0,6 L6,6 L6,0 L10,0 Z"></path>
                            </svg>
                            <span>Добавить проект</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;