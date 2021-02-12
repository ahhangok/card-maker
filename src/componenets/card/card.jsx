import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = 'images/default_logo.png';

const Card = ({card}) =>  {
    const {name, title, email, message, theme, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;
    return(
        // 두가지의 클래스를 사용할 때 백틱을 이용
        <li className={`${styles.card} ${getStyles(theme)}`}> 
        <img className={styles.avatar} src={url} alt="profile"/>
        <div className={styles.info}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.title}>{title}</p>
            <p className={styles.email}>{email}</p>
            <p className={styles.message}>{message}</p>
        </div>
        </li>
    )
}
   

function getStyles(theme){
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
            default:
                throw new Error(`unknown theme: ${theme}`);
    }
}

export default Card;