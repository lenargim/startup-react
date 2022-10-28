import React from 'react';
import s from './styles.module.sass'
import {NavLink} from "react-router-dom";
const Banner = () => {
    return (
        <div className={s.banner}>
            <div className="container">
                <div className={s.title}>
                    <h1>Краудфандинговая <br/>DeFi платформа</h1>
                    <div className={s.description}>
                        <p>Для финансирования стартапов и проектов</p>
                        <NavLink to={'#'} target="_blank">Как это работает</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;